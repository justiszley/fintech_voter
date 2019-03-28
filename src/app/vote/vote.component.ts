import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IMeal } from '../meals';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {
  @Input() meals: IMeal[];
  @Output() decision = new EventEmitter();
}
