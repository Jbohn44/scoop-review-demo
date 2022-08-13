import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseService } from './services/base.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from '../authentication/authentication.module';
import { RatingModule } from 'ngx-bootstrap/rating';
import { InfoTileComponent } from './info-tile/info-tile.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { IceCreamModule } from '../ice-cream/ice-cream.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    NavBarComponent,
    InfoTileComponent,
    AddReviewComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AuthenticationModule,
    RatingModule,
    BsDatepickerModule,
    IceCreamModule

  ],
  exports: [
    NavBarComponent,
    InfoTileComponent,
    AddReviewComponent,
    PageNotFoundComponent
  ],
  providers: [
    BaseService
  ]
})
export class SharedModule { }
