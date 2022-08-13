import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';
import { IceCreamService } from '../services/ice-cream.service';
import { BsModalService, BsModalRef, ModalBackdropOptions, ModalOptions } from 'ngx-bootstrap/modal';
import { User } from 'src/app/authentication/models/user.model';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';

@Component({
  selector: 'app-ice-cream-page',
  templateUrl: './ice-cream-page.component.html',
  styleUrls: ['./ice-cream-page.component.css']
})
export class IceCreamPageComponent implements OnInit {
  iceCream: IceCream = new IceCream();
  iceCreamPage = true;
  iceCreams: IceCream[] = [];
  ratingList = [];
  user: User;
  addBoolean: boolean = false;
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  }
  //TODO: maybe get rid of modal service, modal will be call from side nav
  //TODO: check authservice. Logout is getting called in a different module/component now
  constructor(private iceCreamService: IceCreamService, private authService: AuthenticationService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.initPage();
  }
  ngOnChanges() {
  }

  initPage() {
    // maybe init user to class variable
    this.user = <User>JSON.parse(localStorage.getItem('socialUser'));
    // this.clearPage();
    this.user.UserId = <number>JSON.parse(localStorage.getItem("userId"));
    this.iceCreamService.loadIceCreamData(this.user.UserId).subscribe(x => { this.iceCreams = x });
  }

  delete($event) {
    this.iceCreams = this.iceCreams.filter(x => x.IceCreamId !== $event);
  }
  addClick(){
    this.addBoolean = true;
  }
  onSubmitted($event){
    console.log('does this run?')
    this.addBoolean = false;
    this.iceCreams.unshift(<IceCream>$event);
  }
  logOut(){
    this.user = null;
    this.authService.logout();
  }
  closeAdd(){
    this.addBoolean = false;
  }

  //TODO: Move this to utilities and export function - also can be refactored to make more generic
  onSort($event) {
    //sort functions. figure out how to make this more DRY
    switch ($event) {
      //sort by flavor name A-Z
      case 1:
        this.iceCreams.sort(function (a, b) {
          var nameA = a.FlavorName.toUpperCase(); // ignore upper and lowercase
          var nameB = b.FlavorName.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        });
        break;
      //sort by Flavor Name Z-A
      case 2:
        this.iceCreams.sort(function (a, b) {
          var nameA = a.FlavorName.toUpperCase(); // ignore upper and lowercase
          var nameB = b.FlavorName.toUpperCase(); // ignore upper and lowercase
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        });
        break;
      //sort by Over All rating big to small
      case 3:
        this.iceCreams.sort(function (a, b) {
          var nameA = a.OverAllRating.RatingValue;
          var nameB = b.OverAllRating.RatingValue;
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        });
        break;
      //sort by OverAll rating small to big
      case 4:
        this.iceCreams.sort(function (a, b) {
          var nameA = a.OverAllRating.RatingValue;
          var nameB = b.OverAllRating.RatingValue;
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        });
        break;
        //sort by newest
        case 5:
          this.iceCreams.sort(function (a, b) {
            var nameA = a.ReviewDate;
            var nameB = b.ReviewDate;
            if (nameA > nameB) {
              return -1;
            }
            if (nameA < nameB) {
              return 1;
            }
  
            // names must be equal
            return 0;
          });
          break;
    }

  }
}
