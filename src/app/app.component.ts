import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CircleComponent } from './shared-kernel/components/circle/circle.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CircleComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  circleControl = new FormControl(0);

  ngOnInit(): void {
    this.circleControl.setValue(99);
  }
}
