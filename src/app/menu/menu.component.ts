import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../services/category/category.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public categories: any[];
  // public categoryName: string;
  // public categoryDescription: string;

  constructor(private categoryService: CategoryService ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): any {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response;
      console.log(response);
    }, err => console.log(err));
  }
}
