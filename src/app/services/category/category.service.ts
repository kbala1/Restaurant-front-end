import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

  // const url = 'http://localhost:9092';
 const url = 'https://lit-falls-22870.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): any {
    return this.http
      .get(`${url}/api/categories`);
  }
}
