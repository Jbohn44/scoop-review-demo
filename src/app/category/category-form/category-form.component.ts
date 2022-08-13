import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';
import { matchTerm } from 'src/app/shared/utilities';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  category: Category;
  @Input() userId: number;
  @Input() categoriesNameArr: string[];
  @Output() canceled = new EventEmitter<string>();
  @Output() submitted = new EventEmitter<Category>();
  constructor(private categoryService: CategoryService) { }

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
