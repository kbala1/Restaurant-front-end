import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const localUrl = 'http://localhost:9092';


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
      .post(`${localUrl}/api/orders`, body)
      .subscribe(response => {
        console.log(response);
      });
  }
}
