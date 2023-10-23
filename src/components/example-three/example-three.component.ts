import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-three.component.html',
  styleUrls: ['./example-three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleThreeComponent {
  @Input() text!: string;
}
