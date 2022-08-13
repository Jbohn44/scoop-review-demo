import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.css']
})
export class CategoryManagerComponent implements OnInit, OnChanges {
  categories: Category[] = [];
  addCategory: boolean = false;
  categoryNameArr: string[] = [];
  @Input() userId: number;
  constructor(private categoryService: CategoryService) { }

  ngOnChanges(changes: SimpleChanges): void {
 
  }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(res => {
      this.categories = res;
      this.categoryNameArr = res.map((category)=>{
        return category.CategoryName;
      });
    });
  }

  addCategories() {
    this.addCategory = true;
  }

  submit($event){
    console.log('this is the category', $event);
    this.addCategory = false;
  }

  canceled(){
    this.addCategory = false;
  }
}
