import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { OrderService } from '../services/order/order-service';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  @Input('orderedItemList') orderedItemList: any[];

  tax: number;
  total: number;
  isPathCheckout: boolean;

  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit(): void {
     if (this.route.routeConfig.path.includes('placeOrder')) {
       this.isPathCheckout = false;
     }
     else {
       this.isPathCheckout = true;
     }

     this.getTotalAmount();
  }

  onCheckOut(): void {
    this.orderService.setOrderedItems(this.orderedItemList);
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

  getTotalAmount(): void {
    let subtotal = this.calculateOrderTotal();
    this.tax = subtotal * .10;
    this.total = subtotal + this.tax;
  }

}
