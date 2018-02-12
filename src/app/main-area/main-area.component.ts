import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetRandomItemService } from '../services/get-random-item.service';
import { CardDeckService } from '../data/card-deck.service';
import { ShuffleService } from '../services/shuffle.service';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css'],
})
export class MainAreaComponent implements OnInit {

  constructor(
    public _getRandomItem: GetRandomItemService,
    public _cardDeck: CardDeckService,
    public _shuffle: ShuffleService,
  ) { }

  ngOnInit() {
    this._cardDeck.pushArray();
    this.showItemsCount(this.cardsArray);
  }

  cardsArray:any[] = this._cardDeck.cardsArray;
  spliceArray:any[] = [];
  tempArray:any[] = [];
  sideBar:boolean = false;
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

  showSideBar(){
    this.sideBar = true;
  }

  changeInputValue(action){
    let lengthCardsArray = this.cardsArray.length;
    let currentText = Number(this.inputText);
    let value: number;
    switch (action) {
      case 'incriment':
        if (currentText < lengthCardsArray) {
          value = currentText + 1;
        }
      break;
      case 'decriment':
        if (currentText > 1) {
          value = currentText - 1;
        }
      break;
    }
    this.inputText = value;
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
