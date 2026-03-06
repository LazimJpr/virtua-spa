import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.scss',
})
export class Contador {
  count = signal(0);

  increment(){
    this.count.update((n) => n+1);
  }
}
