import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../services/category/category.service';


@Component({
  selector: 'app-order-now',
  templateUrl: './order-now.component.html',
  styleUrls: ['./order-now.component.css']
})
export class OrderNowComponent implements OnInit {
  public categories: any[];
  display = 'none';
  currentItem: any;
  orderedItemList: any[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  // to open the modal popup for order the items
  openModal(categoryIndex: number, itemIndex: number): void {
    if (this.categories.length > 0) {
      this.currentItem = {
        categoryName: this.categories[categoryIndex].name,
        itemName: this.categories[categoryIndex].itemList[itemIndex].name,
        price: this.categories[categoryIndex].itemList[itemIndex].price,
        itemQuantity: 1,
        itemId: this.categories[categoryIndex].itemList[itemIndex].id
      };
      this.currentItem.totalPrice = this.currentItem.price;
    }
    this.display = 'block';
  }

  onAddQuantity(): void {

    this.currentItem.totalPrice += this.currentItem.price ;
    this.currentItem.itemQuantity ++;
  }

  onSubtractQuantity(): void {
    if (this.currentItem.itemQuantity <= 0) {
      return;
    }
    this.currentItem.totalPrice -= this.currentItem.price ;
    this.currentItem.itemQuantity --;
  }

  onCloseHandled(): void {
    this.display = 'none';
  }

  onAdd(): void {
        this.orderedItemList.push(this.currentItem);

    console.log('Add the things');
    this.display ='none';
  }

  // to get the list of ordered items
  getCategories(): any {
    console.log('here');
    this.categoryService.getCategories().subscribe(response => {
      console.log(response);
      this.categories = response;
    }, err => console.log('oh no' + err));
  }
}
