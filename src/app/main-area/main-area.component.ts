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
  cardsCount:number = 10;
  cardsArray:any[] = [];
  spliceArray:any[] = [];
  tempArray:any[] = [];
  inputText:number = 3;
  blockAddOneCard:boolean = false;
  blockDelOneCard:boolean = false;

  shuffle(array:any[]) {
    let max = array.length;
    let tempItem;
    let item;

    // While there remain elements to shuffle…
    while (max) {
      // Pick a remaining element…
      item = Math.floor(Math.random() * max--);
      // And swap it with the current element.
      tempItem = array[max];
      array[max] = array[item];
      array[item] = tempItem;
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

  showItemsCount(array:any[], num:number = this.inputText){
    this.spliceArray = [];
    let item;
    this.tempArray = [];
    if (num > this.cardsCount) {
      num = this.cardsCount;
    }
    else if (num <= 0) {
      num = 1;
    }
    this.shuffle(array)
    for (let i = 0; i < num; i++) {
      item = this.getRandomInt();
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

  addOneCard(array:any[]): void {
    if (this.spliceArray.length == this.cardsCount){
      return;
    } else {
      let item;
      item = this.getRandomInt();
      console.log(item);
      console.dir(this.tempArray);
      while (!(this.tempArray.indexOf(item) == -1)) {
        item = this.getRandomInt();
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
    let getLength = this.spliceArray.length;
    console.log(getLength + ' ' + this.cardsCount);
    if (getLength == this.cardsCount){
      this.blockAddOneCard = true;
      this.blockDelOneCard = false;
    } else if (getLength < this.cardsCount && getLength > 0) {
      this.blockAddOneCard = false;
      this.blockDelOneCard = false;
    } else if (getLength == 0) {
      this.blockDelOneCard = true;
      this.blockAddOneCard = false;
    }
  }
  checkInputCount(data){
    console.log(data);
    let getLength = this.spliceArray.length;
    if (data > this.cardsCount) {
      this.inputText = this.cardsCount;
    } else if (data < 0) {
      this.inputText = 1;
    }
  }
}
