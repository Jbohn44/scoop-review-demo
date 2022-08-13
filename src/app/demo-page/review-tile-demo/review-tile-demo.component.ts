import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IceCream } from 'src/app/ice-cream/models/ice-cream.model';
import { RatingList } from 'src/app/shared/constants';

/*
  Imports Ice Cream Review and displays as a clickable tile
*/
@Component({
  selector: 'app-review-tile-demo',
  templateUrl: './review-tile-demo.component.html',
  styleUrls: ['./review-tile-demo.component.css']
})
export class ReviewTileDemoComponent implements OnInit {
  
  @Input() iceCream: IceCream;
  ratingList = RatingList;
  iceCreamModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openIceCream(template: TemplateRef<any>){
    this.iceCreamModalRef = this.modalService.show(template);
    
  }
}
