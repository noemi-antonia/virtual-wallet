import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  @Input() coins: any;

  listOfCoins: Array<any> = [];

  isError: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.isError = this.coins instanceof HttpErrorResponse;
    
    if(!this.isError) {
      this.setListOfCoins();
    }
  }

  setListOfCoins(){
      this.listOfCoins = this.coins;
  }
}
