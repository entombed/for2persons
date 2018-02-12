import { Injectable } from '@angular/core';
import { GetRandomItemService } from '../services/get-random-item.service';
import { ShuffleService } from '../services/shuffle.service';

@Injectable()
export class CardDeckService {

  constructor(
    public _getRandomItem: GetRandomItemService,
    public _shuffle: ShuffleService,
  ) { }


  cardsCount:number = 10;
  cardsArray:any[] = [];
  spliceArray:any[] = [];
  tempArray:any[] = [];

  pushArray(){
    for (let i = 1; i <= this.cardsCount; i++) {
      this.cardsArray.push(i);
    }
  }

  showItemsCount(array:any[], num:number){
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
  }

}
