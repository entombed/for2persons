import { Component, OnInit, Input } from '@angular/core';
import { CardDeckService } from '../data/card-deck.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-show-cards',
  templateUrl: './show-cards.component.html',
  styleUrls: ['./show-cards.component.css'],
  animations: [ 
    trigger ('myAwesomeAnimation', [
      state('start', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({transform: 'translateY(-100%)'}),
        animate('500ms cubic-bezier(.65, 1.95, .03, .32)')
      ]),
          ]
        ),
      ]
})




export class ShowCardsComponent implements OnInit {

  constructor(
    public _cardDeck: CardDeckService
  ) { }

  ngOnInit() {
  }

  @Input() pullArray;
  @Input() pullAnimationState;
}
