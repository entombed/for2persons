import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() pullStatusSideBar;
  @Input() pullInputText;
  @Input() pullButtons;
  @Input() pullCardsArray;
  @Input() pullSpliceArray;

  @Output() pushStatusBar = new EventEmitter<boolean>();
  @Output() pushAddButton = new EventEmitter<any>();
  @Output() pushDelButton = new EventEmitter<any>();
  @Output() pushChangeInputValue = new EventEmitter<any>();
  @Output() pushShowItemsCount = new EventEmitter<any>();
  @Output() pushCheckInputCount = new EventEmitter<any>();

  setHidden(){
    this.pushStatusBar.emit(false);
  }
  addCard(){
    this.pushAddButton.emit();
  }
  delCard(){
    this.pushDelButton.emit();
  }
  changeInputValue(action){
    this.pushChangeInputValue.emit(action);
  }
  showItemsCount(array:any[], num:number = this.pullInputText){
    let data = {
      array: array,
      num: num
    }
    this.pushShowItemsCount.emit(data);
  }
  checkInputCount(value){
    this.pushCheckInputCount.emit(value);
  }
}
