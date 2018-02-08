import { Injectable } from '@angular/core';

@Injectable()
export class ShuffleService {

  constructor() { }

  mixIt(array:any[]) {
    let max = array.length;
    let tempItem;
    let item;
     while (max) {
      item = Math.floor(Math.random() * max--);
      tempItem = array[max];
      array[max] = array[item];
      array[item] = tempItem;
    }
    return array;
  }
}
