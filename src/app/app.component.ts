import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'Mi primera app en Angular';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
  resetCounter(): void {
    this.counter = 10;
  }
}
