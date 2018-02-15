import { Injectable } from '@angular/core';

@Injectable()
export class ChangeInputValueService {

  constructor() { }

  changeInputValue(data){
    let value: number;
    switch (data.action) {
      case 'incriment':
        if (data.input < data.length) {
          return ++data.input;
        }
      break;
      case 'decriment':
        if (data.input > 1) {
          return --data.input;
        }
      break;
    }
    return data.input;
  }

  checkInputCount(data){
    let val: number;
    if (data.value > data.length) {
      val =  data.length;
    } else if (data.value < 0) {
      val = 1;
    } else {
      val = data.value;
    }
    return val;
  }
}
