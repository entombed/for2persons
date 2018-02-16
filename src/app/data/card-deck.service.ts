import { Injectable } from '@angular/core';
import { GetRandomItemService } from '../services/get-random-item.service';
import { ShuffleService } from '../services/shuffle.service';

@Injectable()
export class CardDeckService {

  constructor(
    public _getRandomItem: GetRandomItemService,
    public _shuffle: ShuffleService,
  ) { }


  cardsCount:number = 50;
  cardsArray:any[] = [];
  spliceArray:any[] = [];
  tempArray:any[] = [];

  pushArray(){
    for (let i = 1; i <= this.cardsCount; i++) {
      this.cardsArray.push(i);
    }
  }

}
