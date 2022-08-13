import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IceCream } from 'src/app/ice-cream/models/ice-cream.model';
import { IceCreamService } from 'src/app/ice-cream/services/ice-cream.service';
import { ImageService } from 'src/app/ice-cream/services/image.service';
import { RatingTypes } from 'src/app/shared/constants';
import { RatingList } from 'src/app/shared/demo-constants';
import { ReviewDemoService } from '../services/review-demo.service';

@Component({
  selector: 'app-review-card-demo',
  templateUrl: './review-card-demo.component.html',
  styleUrls: ['./review-card-demo.component.css']
})
export class ReviewCardDemoComponent implements OnInit {

  @Input() iceCream: IceCream;
  @Output() deleted: EventEmitter<number> = new EventEmitter();
  ratingTypes = RatingTypes.RatingTypes;
  iceCreamModalRef: BsModalRef;
  loading = false;
  deleteMessage = false;
  imageModalRef: BsModalRef;
  imageList: any[] = [];
  deleteModalRef: BsModalRef;
  ratingList = RatingList;
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  }
  // this is an input into the rating component to disallow editing of ratings on card.  editing will be done it edit section
  edit = false;
  constructor(private reviewDemoService: ReviewDemoService, private modalService: BsModalService) { }

  ngOnInit() {
  }

  editIceCream(template: TemplateRef<any>) {
    this.iceCreamModalRef = this.modalService.show(template, this.config);
  }

  onSaved() {
    this.iceCreamModalRef.hide();
    //could just use toastr here but... adding an ngIf with save message
    this.showSavedMessage();
  }

  showSavedMessage() {
    this.loading = true;
    setTimeout(() => { this.loading = false }, 2000);
  }

  onDelete(event) {
    this.deleteModalRef.hide();
    this.reviewDemoService.deleteReview(this.iceCream.IceCreamId).subscribe(x => x);
    this.deleted.emit(this.iceCream.IceCreamId);
  }

  showDeleteMessage() {
    this.deleteMessage = true;
    setTimeout(() => { this.deleteMessage = false }, 2000);
  }



  openDeleteModal(templateRef: any){
    this.deleteModalRef = this.modalService.show(templateRef);

  }
}
