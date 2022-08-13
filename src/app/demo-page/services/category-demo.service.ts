import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Category } from 'src/app/category/models/category.model';
import { Categories } from 'src/app/shared/demo-constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryDemoService {
  
  private categoryArray = Categories;

  //no http service - mock data
  constructor() { }

  getAllCategories(){
    return of(this.categoryArray);
  }

  addCategory(category: Category){
    this.categoryArray.push(category);
    return of(category);
    // this.CategoryArray.pipe(map())
  }

  deleteCategory(){

  }

}
