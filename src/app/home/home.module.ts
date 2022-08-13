import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { UserSignUpPageComponent } from './user-sign-up-page/user-sign-up-page.component';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationModule } from '../authentication/authentication.module';


@NgModule({
  declarations: [HomePageComponent, UserSignUpPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    CarouselModule.forRoot(),
    SharedModule,
    AuthenticationModule
    
  ]
})
export class HomeModule { }
