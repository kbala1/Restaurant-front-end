import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  @Input('orderedItemList') orderedItemList: any[];

  constructor() { }

  onCheckOut(): void {

  }

  ngOnInit(): void {

  }

  calculateOrderTotal(): number {
    let orderTotal = 0;
    if (this.orderedItemList === null){
      return 0;
    }
    this.orderedItemList.forEach(item => orderTotal += item.totalPrice);
    console.log(orderTotal);
    return orderTotal;

  }


}
