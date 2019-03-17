import { Component } from '@angular/core';
import { MEALS } from './meals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Голосуем за еду';
  agree = 0;
  disagree = 0;
  meals = MEALS;
}
