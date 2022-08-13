import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoPageRoutingModule } from './demo-page-routing.module';
import { DashboardDemoComponent } from './dashboard-demo/dashboard-demo.component';
import { UserFeedDemoComponent } from './user-feed-demo/user-feed-demo.component';
import { ReviewTileDemoComponent } from './review-tile-demo/review-tile-demo.component';
import { ReviewCardDemoComponent } from './review-card-demo/review-card-demo.component';
import { ActivityFeedDemoComponent } from './activity-feed-demo/activity-feed-demo.component';
import { CategoryManagerDemoComponent } from './category-manager-demo/category-manager-demo.component';
import { ReviewAddDemoComponent } from './review-add-demo/review-add-demo.component';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RatingModule } from 'ngx-bootstrap/rating';
import { CategoryDemoComponent } from './category-demo/category-demo.component';
import { CategoryFormDemoComponent } from './category-form-demo/category-form-demo.component';
import { ReviewPageComponent } from './review-page/review-page.component';


@NgModule({
  declarations: [DashboardDemoComponent, UserFeedDemoComponent, ReviewTileDemoComponent, ReviewCardDemoComponent, ActivityFeedDemoComponent, CategoryManagerDemoComponent, ReviewAddDemoComponent, CategoryDemoComponent, CategoryFormDemoComponent, ReviewPageComponent],
  imports: [
    CommonModule,
    DemoPageRoutingModule,
    FormsModule,
    ModalModule,
    BsDatepickerModule,
    RatingModule
  ]
})
export class DemoPageModule { }
