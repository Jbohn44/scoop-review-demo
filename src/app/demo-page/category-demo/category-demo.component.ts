import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/category/models/category.model';

@Component({
  selector: 'app-category-demo',
  templateUrl: './category-demo.component.html',
  styleUrls: ['./category-demo.component.css']
})
export class CategoryDemoComponent implements OnInit {
  @Input() Category: Category;

  constructor() { }

  ngOnInit() {
  }

}
