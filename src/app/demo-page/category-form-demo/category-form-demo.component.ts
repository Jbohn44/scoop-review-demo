import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/category/models/category.model';
import { CategoryService } from 'src/app/category/services/category.service';
import { matchTerm } from 'src/app/shared/utilities';
import { CategoryDemoService } from '../services/category-demo.service';

@Component({
  selector: 'app-category-form-demo',
  templateUrl: './category-form-demo.component.html',
  styleUrls: ['./category-form-demo.component.css']
})
export class CategoryFormDemoComponent implements OnInit {
  category: Category;
  @Input() userId: number;
  @Input() categoriesNameArr: string[];
  @Output() canceled = new EventEmitter<string>();
  @Output() submitted = new EventEmitter<Category>();
  constructor(private categoryService: CategoryDemoService) { }

  ngOnInit() {
    this.initializeCategory();
  }

  onSubmit(){
    if(matchTerm(this.categoriesNameArr, this.category.CategoryName)){
      console.log('TERMS MATCHED');
      return;
    } 
    this.categoryService.addCategory(this.category).subscribe(res=>{
      this.submitted.emit(res);
    }, (err)=>{}, ()=>{
      console.log("complete!");
      this.initializeCategory();
    });
   
  }

  cancelForm(){
    this.canceled.emit('canceled');
    this.initializeCategory();
  }

  initializeCategory(){
    this.category = new Category();
    this.category.UserId = this.userId;
  }
}
