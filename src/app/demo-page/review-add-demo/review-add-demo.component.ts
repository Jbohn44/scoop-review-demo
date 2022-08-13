import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/authentication/models/user.model';
import { Category } from 'src/app/category/models/category.model';
import { CategoryService } from 'src/app/category/services/category.service';
import { IceCream } from 'src/app/ice-cream/models/ice-cream.model';
import { IceCreamService } from 'src/app/ice-cream/services/ice-cream.service';
import { RatingList } from 'src/app/shared/demo-constants';
import { ServiceList } from 'src/app/shared/demo-constants';
import { CategoryDemoService } from '../services/category-demo.service';
import { ReviewDemoService } from '../services/review-demo.service';
@Component({
  selector: 'app-review-add-demo',
  templateUrl: './review-add-demo.component.html',
  styleUrls: ['./review-add-demo.component.css']
})
export class ReviewAddDemoComponent implements OnInit {

  @Input() iceCream: IceCream;
  @Input() edit: boolean;
  @Output() submitted: EventEmitter<any> = new EventEmitter();
  @Output() saved: EventEmitter<IceCream> = new EventEmitter();
  @Output() deleted: EventEmitter<number> = new EventEmitter();
  user: User = new User();
  userId: number;
  serviceList = ServiceList; // try to move this to icecream class
  ratingList = RatingList; 
  max: number = 10;
  rate: number = 0;
  submitting: boolean = false;
  categoryList: Category[] = [];
  constructor(private iceCreamService: ReviewDemoService, private categoryService: CategoryDemoService) { }

  ngOnInit() {
    // TODO: this needs to be changed to get user and not socialUser
    // this.userId = <number>JSON.parse(localStorage.getItem('userId'));
    //this can be changed to edit true or false
    if (this.iceCream === null || this.iceCream === undefined) {
      this.iceCream = new IceCream();
      this.iceCream.UserId = 1; // set userId to 1 for demo
    }
    this.iceCream.UserId = 1; // set userId 1 for demo

    this.categoryService.getAllCategories().subscribe((res)=>{
      this.categoryList = res;
    });
  }

  //create toasts for submittal and errors
  onSubmit() {
    console.log('submitting')
    this.submitting = true;
    this.iceCreamService.addReview(this.iceCream).subscribe(
      (x) => {
        this.submitted.emit(<IceCream>x)
      }, 
      (err) => {
        console.log('error')
        this.submitting = false;
      }, 
      () => {
        console.log('complete')
        this.submitting = false;
      });
  }

  onSave() {
    this.iceCreamService.updateReview(this.iceCream).subscribe(response => response);
    this.saved.emit();
  }

  onDelete(iceCreamId) {
    //TODO - add modal for confirmation
    this.iceCreamService.deleteReview(iceCreamId).subscribe(x => x);
    this.deleted.emit(iceCreamId);
  }

  removeService(service) {
    this.iceCream.Services = this.iceCream.Services.filter(x => x !== service);
  }

  handleService(event, service){
    if(event.target.checked === true){
      this.iceCream.Services.push(service);
    } else {
      this.iceCream.Services = this.iceCream.Services.filter(x => x !== service);
    }

  }

}
