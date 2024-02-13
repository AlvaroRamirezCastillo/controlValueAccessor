import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CircleComponent } from './shared-kernel/components/circle/circle.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CircleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  circleControl = new FormControl('');
}
