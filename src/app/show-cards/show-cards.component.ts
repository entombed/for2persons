import { Component, OnInit, Input } from '@angular/core';
import { CardDeckService } from '../data/card-deck.service';

@Component({
  selector: 'app-show-cards',
  templateUrl: './show-cards.component.html',
  styleUrls: ['./show-cards.component.css']
})
export class ShowCardsComponent implements OnInit {

  constructor(
    public _cardDeck: CardDeckService
  ) { }

  ngOnInit() {
  }

  @Input() pullArray;
}
