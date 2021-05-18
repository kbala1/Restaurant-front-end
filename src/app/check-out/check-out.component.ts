import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  orderedItemList: any[];
   orderTotal = 0;

  constructor() { }

  onCheckOut(): void {

  }

  ngOnInit(): void {
    this.orderedItemList = [{
      itemName: 'club Sandwich',
      price: 6,
      itemQuantity: 1,
      total: 6
    },
    {
      itemName: 'Shake',
      price: 6,
      itemQuantity: 2,
      total: 6
    }
    ];
    this.orderedItemList.forEach(item => this.orderTotal += item.total);
  }


}
