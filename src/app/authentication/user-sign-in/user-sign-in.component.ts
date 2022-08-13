import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user.model';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {
  @Output() signedIn: EventEmitter<any> = new EventEmitter();
  user: SocialUser;
  loggedIn: boolean = false;
  constructor(private appAuth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.loggedIn = this.getLoggedIn();
  }

  googleSignIn() {
    this.loggedIn = true;
    this.appAuth.login();
  }

  signOut() {
    this.loggedIn = false;
    this.appAuth.logout();
  }

  getLoggedIn(){
    
    if(this.appAuth.googleUserValue){
      return true;
    }
    return false;
  }
}
