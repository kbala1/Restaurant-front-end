import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {OrderService} from '../services/order/order-service';
declare const M;

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  orderedItemList: any[];
  deliveryOrPickup = 'pickup';

  firstName = new FormControl('');
  lastName = new FormControl('');
  phoneNo = new FormControl('');
  address = new FormControl('');


  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.orderedItemList = this.orderService.getOrderedItems();
  }

  // to send the order detail
  submit(): void {
    console.log(this.firstName.value, this.lastName.value, this.phoneNo.value, this.address.value);
    console.log("value submitted");
    let items = this.orderedItemList.map(item => {
      return {
        itemId: item.itemId,
        itemQuantity: item.itemQuantity
      };
    });
    const body = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      phoneNo: this.phoneNo.value,
      address: this.address.value,
      items: items,
      orderType: this.deliveryOrPickup

    };
    this.orderService.submitOrder(body);
    console.log(body);
    const toastHTML = 'Order is placed';
    M.toast({html: toastHTML});
  }
}







