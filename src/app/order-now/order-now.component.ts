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

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  openModal(): void {
    this.display = 'block';
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
