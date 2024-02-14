import { Component, signal, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrl: './circle.component.scss',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CircleComponent),
      multi: true
    }
  ]
})
export class CircleComponent implements ControlValueAccessor {
  counter = signal(0);
  onChange!: (counter: number) => void;
  onTouched!: () => void;
  disabled = false;

  increase() {
    this.counter.update(counter => counter + 1);
    this.onChange(this.counter());
  }

  writeValue(counter: number): void {
    console.log(1, counter);
    this.counter.set(counter);
  }

  registerOnChange(fn: (counter: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
}
