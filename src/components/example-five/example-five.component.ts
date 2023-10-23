import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { timer } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { provideExample } from "../../lib/provide-example";

@Component({
  selector: 'app-example-five',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-five.component.html',
  styleUrls: ['./example-five.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleFiveComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  private nativeElement = provideExample();
  timer = timer(0, 1000);

  constructor() {
    console.log("native element: ", this.nativeElement)

    this.timer.pipe(
      takeUntilDestroyed()
    ).subscribe(
      value => console.log("TIMER VALUE: ", { value})
    )
  }

  ngOnInit() {
    this.timer.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(
      value => console.log("TIMER VALUE: ", { value})
    )
  }
}
