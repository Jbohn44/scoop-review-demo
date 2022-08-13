import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardDemoComponent } from './dashboard-demo/dashboard-demo.component';
import { ReviewPageComponent } from './review-page/review-page.component';


const routes: Routes = [{ path: '', component: DashboardDemoComponent },
                        { path: 'reviews', component: ReviewPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoPageRoutingModule { }
