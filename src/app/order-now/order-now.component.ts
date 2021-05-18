import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../services/category/category.service';

@Component({
  selector: 'app-order-now',
  templateUrl: './order-now.component.html',
  styleUrls: ['./order-now.component.css']
})
export class OrderNowComponent implements OnInit {
  public categories: any[];
  display = "none";
  currentItem: any;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  openModal(categoryIndex: number, itemIndex: number): void {
    if (this.categories.length > 0) {
      this.currentItem = {
        categoryName: this.categories[categoryIndex].name,
        itemName: this.categories[categoryIndex].itemList[itemIndex].name,
        price: this.categories[categoryIndex].itemList[itemIndex].price,
        itemQuantity: 1
      };
    }
    this.display = 'block';
  }

  onAddQuantity(): void {

    this.currentItem.price += this.currentItem.price ;
    this.currentItem.itemQuantity ++;
  }

  onCloseHandled(): void {
    this.display = 'none';
  }

  getCategories(): any {
    console.log('here');
    this.categoryService.getCategories().subscribe(response => {
      console.log(response);
      this.categories = response;
    }, err => console.log('oh no' + err));
  }
}
