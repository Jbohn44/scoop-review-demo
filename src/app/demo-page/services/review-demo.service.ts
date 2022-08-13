import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IceCream } from 'src/app/ice-cream/models/ice-cream.model';
import { IceCreamReviewDatas } from 'src/app/shared/demo-constants';
@Injectable({
  providedIn: 'root'
})
export class ReviewDemoService {

  /*
  Configured with Mock Data in mind - actual service would include http service with calls/returns
  from a datasource, like a REST API
  */
  private IceCreamReviews: IceCream[] = IceCreamReviewDatas;

  
  constructor() { }

  getReview(){

  }

  getAllReviewsByUserId(userId: number){
    return of(this.IceCreamReviews.filter((review)=> review.UserId === userId));
  }

  //gets first five in array for data feed
  getUserDataFeed(userId: number){
    return of(this.IceCreamReviews.filter((review) => review.UserId === userId).slice(0, 5));
  }
  
  //for demo purposes - filter top 6 reviews by !userId
  getActivityFeed(userId: number){
    return of(this.IceCreamReviews.filter(review => review.UserId !== userId).slice(0, 6));
  }

  addReview(iceCream: IceCream) {
    this.IceCreamReviews.unshift(iceCream);
    return of(iceCream);

  }

  updateReview(iceCream: IceCream){
    //TODO update review in array;
    return of(iceCream)
  }

  //removes 'deleted' review from array
  deleteReview(iceCreamId: number){
    this.IceCreamReviews = this.IceCreamReviews.filter(review=> review.IceCreamId !== iceCreamId);
    return of(this.IceCreamReviews);
  }
}
