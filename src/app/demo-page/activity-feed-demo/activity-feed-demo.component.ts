import { Component, OnInit } from '@angular/core';
import { IceCream } from 'src/app/ice-cream/models/ice-cream.model';
import { IceCreamService } from 'src/app/ice-cream/services/ice-cream.service';
import { ReviewDemoService } from '../services/review-demo.service';

@Component({
  selector: 'app-activity-feed-demo',
  templateUrl: './activity-feed-demo.component.html',
  styleUrls: ['./activity-feed-demo.component.css']
})
export class ActivityFeedDemoComponent implements OnInit {

  reviewArray: IceCream[] = [];
  constructor(private iceCreamService: ReviewDemoService) { }

  ngOnInit() {
    this.iceCreamService.getActivityFeed(1).subscribe(response => {
      console.log("ice creams", response)
      this.reviewArray = <IceCream[]>response;
    }, (err)=>{
      console.error(err);
    }, ()=>{
      console.log('complete');
    });
  }
}
