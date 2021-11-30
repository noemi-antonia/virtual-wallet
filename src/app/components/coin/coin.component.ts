import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  @Input() coin: any;

  constructor() { }

  ngOnInit(): void {
  }

  formatDate(date:string){
    const pipe = new DatePipe('en-us');
    const formattedDate = pipe.transform(date, 'short');
    return formattedDate;
  }

}
