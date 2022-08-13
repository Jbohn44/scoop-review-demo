import { Component, OnInit, TemplateRef } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { User } from '../../authentication/models/user.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  signInModalRef: BsModalRef;
  user: any;
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  }
  blockUI = true;
  constructor(private modalService: BsModalService, private authService: AuthenticationService) { }

  ngOnInit() {
    /* work needs to be done to this however, the problem appears to be a race condition-
       the nav bar is loading before the Behavior subject is loaded, causing the issue
    */

    this.user = <SocialUser>(JSON.parse(localStorage.getItem('socialUser')));
  }


  logOut() {
    this.authService.logout();
  }





}
