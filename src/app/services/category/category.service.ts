import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const localUrl = 'http://localhost:9092';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): any {
    return this.http
      .get(`${localUrl}/api/categories`);
  }
}
