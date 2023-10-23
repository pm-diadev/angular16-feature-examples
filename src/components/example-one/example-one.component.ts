import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-example-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleOneComponent {
  loading = false;
  loading$ = new BehaviorSubject(false);
  loadingSignal = signal(false);

  setLoading() {
    setTimeout(() => {
      this.loading = !this.loading;
    }, 50)
  }

  setSubject() {
    this.loading$.next(!this.loading$.getValue())
  }

  setSignal() {
    this.loadingSignal.set(!this.loadingSignal())
  }
}
