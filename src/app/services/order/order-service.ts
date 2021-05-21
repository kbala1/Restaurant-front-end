import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

  // const url = 'http://localhost:9092';
  const url = 'https://lit-falls-22870.herokuapp.com/';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderedItems: any[];

  constructor(private http: HttpClient) { }

  getOrderedItems(): any[] {
    return this.orderedItems;

  }

  setOrderedItems(orderedItems): void {
    this.orderedItems = orderedItems;
  }

  submitOrder(body: {}): void {
    this.http
      .post(`${url}/api/orders`, body)
      .subscribe(response => {
        console.log(response);
      });
  }
}
