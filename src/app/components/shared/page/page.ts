import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { Route, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page',
  imports: [Menu, RouterOutlet],
  templateUrl: './page.html',
  styleUrl: './page.scss',
})
export class Page {

}
