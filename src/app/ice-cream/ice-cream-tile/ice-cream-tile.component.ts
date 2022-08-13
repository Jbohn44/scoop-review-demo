import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { RatingList } from 'src/app/shared/constants';
import { IceCream } from '../models/ice-cream.model';

@Component({
  selector: 'app-ice-cream-tile',
  templateUrl: './ice-cream-tile.component.html',
  styleUrls: ['./ice-cream-tile.component.css']
})
export class IceCreamTileComponent implements OnInit {
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
