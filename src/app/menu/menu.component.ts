import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category/category.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public categories: any[];

  constructor(private categoryService: CategoryService ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): any {
    console.log('here');
    this.categoryService.getCategories().subscribe(response => {
      console.log(response);
      this.categories = response;
    }, err => console.log('oh no' + err));
  }
}
