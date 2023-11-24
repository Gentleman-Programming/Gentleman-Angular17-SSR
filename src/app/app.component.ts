import { Component, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncComponent } from './src/components/async/async.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular17-SSR';
  constructor() {
    afterNextRender(() => {
      console.log(window.location.pathname)
    })
  }
}
