import { Component, signal } from '@angular/core';
import { MenuItem } from "../menu-item/menu-item";

@Component({
  selector: 'app-botao',
  imports: [MenuItem],
  templateUrl: './botao.html',
  styleUrl: './botao.scss',
})
export class Botao {
  readonly label = signal('Botão');
}
