import { Component, signal } from '@angular/core';
import { Page } from './components/shared/page/page';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
 imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('virtua-spa');
}
