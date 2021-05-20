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

  isPathCheckout: boolean;

  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit(): void {
     if (this.route.routeConfig.path.includes('placeOrder')) {
       this.isPathCheckout = false;
     }
     else {
       this.isPathCheckout = true;
     }
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

}
