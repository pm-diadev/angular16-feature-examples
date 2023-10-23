import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, combineLatest, tap, timer } from "rxjs";
import { toSignal } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-example-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleTwoComponent {
  private cdr = inject(ChangeDetectorRef);
  a = 1;
  b = 2;

  get sum() {
    console.log("getter called")
    return this.a + this.b;
  }

  a$ = new BehaviorSubject(1);
  a$ToSignal = toSignal(this.a$);
  b$ = new BehaviorSubject(2);

  sum$ = combineLatest([this.a$, this.b$], (a, b) => a + b)
    .pipe(
      tap(value => console.log("SUM CHANGED: ", value))
    );

  aSignal = signal(1);
  bSignal = signal(2);

  sumSignal = computed(() => {
    console.log("computed value called")
    // return (this.a$ToSignal() as number) + this.bSignal();
    return this.aSignal() + this.bSignal()
  });

  constructor() {
    effect(() => console.log("SIGNAL SUM CHANGED: ", this.sumSignal()))
  }

  setA() {
    this.a = this.a + 1;
    this.a$.next(this.a$.getValue() + 1)
    this.aSignal.set(this.aSignal() + 1)
  }

  setB() {
    timer(300)
      .subscribe(() => {
        this.b = this.b + 1;
        this.b$.next(this.b$.getValue() + 1)
        this.bSignal.set(this.bSignal() + 1)

      })
  }

  triggerCdr() {
    this.cdr.markForCheck();
  }
}
