import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GetRandomItemService } from '../services/get-random-item.service';
import { CardDeckService } from '../data/card-deck.service';
import { ShuffleService } from '../services/shuffle.service';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {

  constructor(
    public _getRandomItem: GetRandomItemService,
    public _cardDeck: CardDeckService,
    public _shuffle: ShuffleService,
  ) { }

  ngOnInit() {
    this._cardDeck.pushArray();
    this.showItemsCount(this.cardsArray);
  }

  @Input() showSideBar;
  @Output() sendArray = new EventEmitter();
  // cardsCount = this._cardDeck.cardsCount;
  cardsArray:any[] = this._cardDeck.cardsArray;
  spliceArray:any[] = [];
  tempArray:any[] = [];
  sideBarStatus:boolean = false;
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
    // this._cardDeck.showItemsCount(this.cardsArray, num);
    this.spliceArray = this._cardDeck.spliceArray;
    this.tempArray = this._cardDeck.tempArray;
    this.inputText = num;
    this.checkButtonStatus();
    this.sendArray.emit(this.spliceArray);
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
