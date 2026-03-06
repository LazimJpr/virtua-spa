import { Component, signal } from '@angular/core';
import { MenuItem } from '../../components/shared/menu-item/menu-item';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [MenuItem, RouterLink, RouterOutlet],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
  title = signal('Virtua Content');
  subtitle = signal('Eleve seus resultados com a Virtua Content, a plataforma de marketing digital que impulsiona o crescimento do seu negócio. ');

}
