import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GetRandomItemService } from '../services/get-random-item.service';
import { CardDeckService } from '../data/card-deck.service';
import { ShuffleService } from '../services/shuffle.service';
import { ChangeInputValueService } from '../services/change-input-value.service';

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
    public _changeInputValue: ChangeInputValueService,
  ) { }

  ngOnInit() {
    this._cardDeck.pushArray();
    this.showItemsCount(this.startData);
  }

  cardsArray:any[] = this._cardDeck.cardsArray;
  spliceArray:any[] = [];
  tempArray:any[] = [];
  inputText:number = 3;

  startData = {
    array: this.cardsArray,
    num: this.inputText
  }

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
    let data = {
      length: this.cardsArray.length,
      input: Number(this.inputText),
      action: action
    }
    this.inputText = this._changeInputValue.changeInputValue(data);
  }

  showItemsCount(event){
    let array = event.array;
    let num = event.num;
    this.spliceArray = [];
    let item;
    this.tempArray = [];
    let lengthArray = array.length;
    let data = {
      length: lengthArray,
      value: num
    }
    num = this._changeInputValue.checkInputCount(data);
    this.cardsArray = this._shuffle.mixIt(array);
    for (let i = 0; i < num; i++) {
      item = this._getRandomItem.getItem(0, lengthArray);
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

  addOneCard() {
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
      this.spliceArray.push(this.cardsArray[item]);
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
    let data = {
      length: this.cardsArray.length,
      value: value
    }
    this.inputText = this._changeInputValue.checkInputCount(data);
  }

  changeOneCard(action){
    if (action == 'incriment') {
      this.addOneCard();
    } else if (action == 'decriment') {
      this.delOneCard();
    }
  }
}
