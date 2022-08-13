import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IceCream } from 'src/app/ice-cream/models/ice-cream.model';
import { Service } from 'src/app/ice-cream/models/service.model';
import { IceCreamService } from 'src/app/ice-cream/services/ice-cream.service';
import { RatingList, ServiceTypes } from '../constants';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  serviceTypes = ServiceTypes;
  ratingList = RatingList;
  modalRef?: BsModalRef;
  iceCream = new IceCream();
  @Output() submitted: EventEmitter<any> = new EventEmitter();
  @Output() saved: EventEmitter<IceCream> = new EventEmitter();
  @Output() deleted: EventEmitter<number> = new EventEmitter();

  constructor(private modalService: BsModalService, private iceCreamService: IceCreamService) { }

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
