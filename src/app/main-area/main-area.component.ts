import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetRandomItemService } from '../services/get-random-item.service';
import { CardDeckService } from '../data/card-deck.service';
import { ShuffleService } from '../services/shuffle.service';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css'],
  providers: [
    GetRandomItemService,
    CardDeckService,
    ShuffleService
  ]
})
export class MainAreaComponent implements OnInit {

  constructor(
    public _getRandomItem: GetRandomItemService,
    public _cardDeck: CardDeckService,
    public _shuffle: ShuffleService,
  ) { }

  ngOnInit() {
    for (let i = 1; i <= this.cardsCount; i++) {
      this.cardsArray.push(i);
    }
    this.showItemsCount(this.cardsArray);
  }

  // @Output() sendSpliceArray = new EventEmitter();

  cardsCount = this._cardDeck.cardsCount;

  cardsArray:any[] = [];
  spliceArray:any[] = [];
  tempArray:any[] = [];

  inputText:number = 3;

  buttons = {
    plus: {
      status: false,
      label: "add one card"
    },
    minus: {
      status: false,
      label: "del one card"
    },
  };

  changeInputValue(action){
    let lengthCardsArray = this.cardsArray.length;
    let currentText = this.inputText;
    switch (action) {
      case 'incriment':
        if (this.inputText < lengthCardsArray) {
          this.inputText++;
        }
      break;
      case 'decriment':
        if (this.inputText > 1) {
          this.inputText--;
        }
      break;
    }
  }

  showItemsCount(array:any[], num:number = this.inputText){
    this.spliceArray = [];
    let item;
    this.tempArray = [];
    let lengthCardsArray = this.cardsArray.length;
    if (num > lengthCardsArray) {
      num = lengthCardsArray;
    }
    else if (num <= 0) {
      num = 1;
    }
    this.cardsArray = this._shuffle.mixIt(array);
    for (let i = 0; i < num; i++) {
      item = this._getRandomItem.getItem(0, this.cardsArray.length);
      if (this.tempArray.indexOf(item) == -1) {
        this.tempArray.push(item);
        this.spliceArray.push(array[item]);
      } else {
        i--;
      }
    }
    this.inputText = num;
    this.checkButtonStatus();
    // this.sendSpliceArray.emit(this.spliceArray);
  }

  addOneCard(array:any[]) {
    let lengthCardsArray = this.cardsArray.length;
    let lengthSpliceArray = this.spliceArray.length;
    if (lengthSpliceArray == lengthCardsArray){
      return;
    } else {
      let item;
      item = this._getRandomItem.getItem(0, lengthSpliceArray);
      while (!(this.tempArray.indexOf(item) == -1)) {
        item = this._getRandomItem.getItem(0, lengthCardsArray);
      }
      this.tempArray.push(item);
      this.spliceArray.push(array[item]);
    }
    this.checkButtonStatus();
  }
  delOneCard(){
    this.tempArray.pop();
    this.spliceArray.pop();
    this.checkButtonStatus();
  }

  checkButtonStatus(){
    let lengthSpliceArray = this.spliceArray.length;
    let lengthCardsArray = this.cardsArray.length;
    if (lengthSpliceArray == lengthCardsArray){
      this.buttons.plus.status = true;
      this.buttons.minus.status = false;
    } else if (lengthSpliceArray == 0) {
      this.buttons.minus.status = true;
      this.buttons.plus.status = false;
    } else {
      this.buttons.plus.status = false;
      this.buttons.minus.status = false;
    }
  }
  checkInputCount(value){
    let lengthCardsArray = this.cardsArray.length;
    let lengthSpliceArray = this.spliceArray.length;
    if (value > lengthCardsArray) {
      this.inputText = lengthCardsArray;
    } else if (value < 0) {
      this.inputText = 1;
    }
  }
}
