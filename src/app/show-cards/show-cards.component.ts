import { Component, OnInit } from '@angular/core';
import { CardDeckService } from '../data/card-deck.service';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-show-cards',
  templateUrl: './show-cards.component.html',
  styleUrls: ['./show-cards.component.css'],
  providers: [
    CardDeckService
  ]
})
export class ShowCardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  catchSpliceArray(event){
    console.log(event);
  }
}
