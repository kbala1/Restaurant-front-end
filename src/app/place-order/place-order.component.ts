import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  @Input('orderedItemList') orderedItemList: any[];

  firstName = new FormControl('');
  lastName = new FormControl('');
  phoneNo = new FormControl('');
  address = new FormControl('');

  constructor() { }

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
