import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IceCream } from 'src/app/ice-cream/models/ice-cream.model';
import { ReviewDemoService } from '../services/review-demo.service';

@Component({
  selector: 'app-dashboard-demo',
  templateUrl: './dashboard-demo.component.html',
  styleUrls: ['./dashboard-demo.component.css']
})
export class DashboardDemoComponent implements OnInit {

  // serviceTypes = ServiceTypes;
  // ratingList = RatingList;
  modalRef?: BsModalRef;
  iceCream = new IceCream();
  // @Output() submitted: EventEmitter<any> = new EventEmitter();
  // @Output() saved: EventEmitter<IceCream> = new EventEmitter();
  // @Output() deleted: EventEmitter<number> = new EventEmitter();

  constructor(private modalService: BsModalService, private reviewService: ReviewDemoService) { }

  ngOnInit() {
  }

  addReview(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit(event) {
    console.log('this.event', event);
    this.iceCream = new IceCream();
    this.modalRef.hide();
  }

}
