import { Injectable } from '@angular/core';

@Injectable()
export class GetRandomItemService {

  constructor() { }

  getItem(min:number, max:number) {
    let randomItem = Math.floor(Math.random() * (max - min)) + min;
    return randomItem;
  }
}
