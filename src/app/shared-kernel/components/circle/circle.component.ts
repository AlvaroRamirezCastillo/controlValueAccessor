import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrl: './circle.component.scss',
  standalone: true
})
export class CircleComponent {
  counter = signal(0);

  increase() {
    this.counter.update(counter => counter + 1);
  }
}
