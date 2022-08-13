import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserSignInComponent,
    UserSignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UserSignInComponent,
    UserSignUpComponent
  ],
  providers: [
    AuthenticationService,
    UserService
  ]
})
export class AuthenticationModule { }
