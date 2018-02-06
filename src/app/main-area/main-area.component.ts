import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= this.cardsCount; i++) {
      this.cardsArray.push(i);
    }
    this.showItemsCount(this.cardsArray);
  }
  cardsCount:number = 50;
  cardsArray:any[] = [];
  spliceArray:any[] = [];
  inputText:number = 1;

  shuffle(array:any[]) {
    let max = array.length;
    let itemTemp;
    let item;

    // While there remain elements to shuffle…
    while (max) {
      // Pick a remaining element…
      item = Math.floor(Math.random() * max--);
      // And swap it with the current element.
      itemTemp = array[max];
      array[max] = array[item];
      array[item] = itemTemp;
    }
    this.cardsArray = array;
  }

  incrimet(){
    if (this.inputText < this.cardsCount) {
      this.inputText++;
    }
  }

  decrimet(){
    if (this.inputText > 1) {
      this.inputText--;
    }
  }

  getRandomInt(min:number = 0, max:number = this.cardsCount) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  showItemsCount(array:any[], num:number = 3){
    this.spliceArray = [];
    let item;
    var tempArray = [];
    if (num > this.cardsCount) {
      num = this.cardsCount;
    }
    else if (num <= 0) {
      num = 1;
    }
    this.shuffle(array)
    for (let i = 0; i < num; i++) {
      item = this.getRandomInt();
      if (tempArray.indexOf(item) == -1) {
        tempArray.push(item);
        this.spliceArray.push(array[item]);
      } else {
        i--;
      }
    }
    this.inputText = num
  }
}
