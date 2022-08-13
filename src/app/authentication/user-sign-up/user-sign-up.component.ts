import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
  //TODO: rename currentUserNames variable
  userSignUp: User = new User();
  currentUserNames: string[] = [];
  passwordCheck: string;
  usernameWarning = false;
  constructor(private userService: UserService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(x => {
      if (x.length > 0) {
        x.forEach(i => {
          this.currentUserNames.push(i.toLowerCase())
        });
      }
    });
  }

  onSubmit() {
    if (this.checkUserName(this.userSignUp.UserName) === true) {
      this.usernameWarning = true;
    } else {
      this.userService.createUser(this.userSignUp).subscribe(x => {
        x
        // this.authService.login(x).subscribe(x => {console.log("this is from signup login", x)});
      }); // need to handle successful user sign up.  authenticate and sign in
    }
  }

  checkUserName(userName: string): boolean {
    if (this.currentUserNames.length > 0) {
      if (this.currentUserNames.includes(userName.toLowerCase())) {
        return true;
      }
      return false;
    }
    return false;
  }
}
