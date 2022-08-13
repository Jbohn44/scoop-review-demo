import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryManagerComponent } from './category-manager/category-manager.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoryComponent, 
    CategoryFormComponent, 
    CategoryManagerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CategoryComponent,
    CategoryFormComponent,
    CategoryManagerComponent
  
  ]
})
export class CategoryModule { }
