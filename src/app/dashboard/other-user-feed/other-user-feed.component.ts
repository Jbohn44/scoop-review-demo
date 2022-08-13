import { Component, Input, OnInit } from '@angular/core';
import { IceCream } from 'src/app/ice-cream/models/ice-cream.model';
import { IceCreamService } from 'src/app/ice-cream/services/ice-cream.service';

@Component({
  selector: 'app-other-user-feed',
  templateUrl: './other-user-feed.component.html',
  styleUrls: ['./other-user-feed.component.css']
})
export class OtherUserFeedComponent implements OnInit {
  @Input() userId: number;
  reviewArray: IceCream[] = [];
  constructor(private iceCreamService: IceCreamService) { }

  ngOnInit() {
    this.iceCreamService.getUserReviewFeed(this.userId).subscribe(response => {
      console.log("ice creams", response)
      this.reviewArray = <IceCream[]>response;
    }, (err)=>{
      console.error(err);
    }, ()=>{
      console.log('complete');
    });
  }

}
