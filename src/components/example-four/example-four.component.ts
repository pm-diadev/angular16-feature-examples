import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example-four',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-four.component.html',
  styleUrls: ['./example-four.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleFourComponent {
 @Input({required: true}) text!: string;
}
