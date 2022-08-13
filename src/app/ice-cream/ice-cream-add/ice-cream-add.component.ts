import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';
import { IceCreamService } from '../services/ice-cream.service';
import { User } from 'src/app/authentication/models/user.model';
import { CategoryService } from 'src/app/category/services/category.service';
import { Category } from 'src/app/category/models/category.model';

@Component({
  selector: 'app-ice-cream-add',
  templateUrl: './ice-cream-add.component.html',
  styleUrls: ['./ice-cream-add.component.css']
})
export class IceCreamAddComponent implements OnInit {
  @Input() iceCream: IceCream;
  @Input() edit: boolean;
  @Output() submitted: EventEmitter<any> = new EventEmitter();
  @Output() saved: EventEmitter<IceCream> = new EventEmitter();
  @Output() deleted: EventEmitter<number> = new EventEmitter();
  user: User = new User();
  userId: number;
  serviceList = []; // try to move this to icecream class
  ratingList = [];  // try to move this to icecream class
  max: number = 10;
  rate: number = 0;
  submitting: boolean = false;
  categoryList: Category[] = [];
  constructor(private iceCreamService: IceCreamService, private categoryService: CategoryService) { }

  ngOnInit() {
    // TODO: this needs to be changed to get user and not socialUser
    this.userId = <number>JSON.parse(localStorage.getItem('userId'));
    //this can be changed to edit true or false
    if (this.iceCream === null || this.iceCream === undefined) {
      this.iceCream = new IceCream();
      this.iceCream.UserId = this.userId;
    }
    this.iceCream.UserId = this.userId;
    this.serviceList = [
      { ServiceTypeId: 1, ServiceName: 'Dine-In' },
      { ServiceTypeId: 2, ServiceName: 'Carry-Out' },
      { ServiceTypeId: 3, ServiceName: 'Drive-Thru' }
    ];

    this.ratingList = [
      {RatingType: "FlavorRating", RatingName: "Flavor"},
      {RatingType: "CreaminessRating", RatingName: "Creaminess"},
      {RatingType: "IcinessRating", RatingName: "Iciness"},
      {RatingType: "DensityRating", RatingName: "Density"},
      {RatingType: "ValueRating", RatingName: "Value"},
      {RatingType: "OverAllRating", RatingName: "Over All"}
    ];
    this.categoryService.getAllCategories().subscribe((res)=>{
      this.categoryList = res;
    });
  }


  submitForm($event) {
  }

  //create toasts for submittal and errors
  onSubmit() {
    
    this.submitting = true;
    this.iceCreamService.postIceCream(this.iceCream).subscribe(
      (x) => {
        this.submitted.emit(<IceCream>x)
      }, 
      (err) => {
        
        this.submitting = false;
      }, 
      () => {
        this.submitting = false;
      });
  }

  onSave() {
    this.iceCreamService.putIceCream(this.iceCream).subscribe(response => response);
    this.saved.emit();
  }

  onDelete(iceCreamId) {
    this.iceCreamService.deleteIceCream(iceCreamId).subscribe(x => x);
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
