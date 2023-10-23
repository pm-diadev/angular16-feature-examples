import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BehaviorSubject } from "rxjs";
import { MatExpansionModule } from "@angular/material/expansion";
import { ExampleOneComponent } from "../components/example-one/example-one.component";
import { ExampleTwoComponent } from "../components/example-two/example-two.component";
import { ExampleFourComponent } from "../components/example-four/example-four.component";
import { ExampleFiveComponent } from "../components/example-five/example-five.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatExpansionModule, ExampleOneComponent, ExampleTwoComponent, RouterLink, ExampleFourComponent, ExampleFiveComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'angular16-features';

  showExampleFive = signal(false);
}
