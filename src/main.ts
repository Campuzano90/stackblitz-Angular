import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: ``,
})
export class App {
  name = 'Angular';
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

bootstrapApplication(App);
