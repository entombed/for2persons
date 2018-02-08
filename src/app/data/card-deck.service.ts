import { Injectable } from '@angular/core';

@Injectable()
export class CardDeckService {

  constructor() { }

  cardsCount:number = 10;
  cardsArray:any[] = [];
  spliceArray:any[] = [];
  tempArray:any[] = [];

}
