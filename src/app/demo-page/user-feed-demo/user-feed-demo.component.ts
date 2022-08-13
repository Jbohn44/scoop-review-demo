import { Component, OnInit } from '@angular/core';
import { IceCream } from 'src/app/ice-cream/models/ice-cream.model';
import { ReviewDemoService } from '../services/review-demo.service';

@Component({
  selector: 'app-user-feed-demo',
  templateUrl: './user-feed-demo.component.html',
  styleUrls: ['./user-feed-demo.component.css']
})
export class UserFeedDemoComponent implements OnInit {

  iceCreams: IceCream[] = [];
  constructor(private iceCreamReviewService: ReviewDemoService) { }

  ngOnInit() {
    this.iceCreamReviewService.getUserDataFeed(1).subscribe((res)=> this.iceCreams = res);
  }

}
