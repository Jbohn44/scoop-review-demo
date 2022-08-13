import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Category } from 'src/app/category/models/category.model';
import { CategoryService } from 'src/app/category/services/category.service';
import { CategoryDemoService } from '../services/category-demo.service';

@Component({
  selector: 'app-category-manager-demo',
  templateUrl: './category-manager-demo.component.html',
  styleUrls: ['./category-manager-demo.component.css']
})
export class CategoryManagerDemoComponent implements OnInit {

  categories: Category[] = [];
  addCategory: boolean = false;
  categoryNameArr: string[] = [];
  @Input() userId: number;
  constructor(private categoryService: CategoryDemoService ) { }

  ngOnChanges(changes: SimpleChanges): void {
 
  }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(res => {
      console.log('cat res', res)
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
