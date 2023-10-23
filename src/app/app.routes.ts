import { Routes } from '@angular/router';
import { AppComponent } from "./app.component";

export const routes: Routes = [
  {
    path: 'test/:text',
    loadComponent: () => import('../components/example-three/example-three.component').then(m => m.ExampleThreeComponent)
  }
];
