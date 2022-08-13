import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IceCream } from 'src/app/ice-cream/models/ice-cream.model';
import {RatingList} from '../constants'
//TODO-deprecated - remove
@Component({
  selector: 'app-info-tile',
  templateUrl: './info-tile.component.html',
  styleUrls: ['./info-tile.component.css']
})
export class InfoTileComponent implements OnInit {
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
