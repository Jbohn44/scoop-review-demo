import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../helpers/auth.guard';
import { IceCreamPageComponent } from '../ice-cream/ice-cream-page/ice-cream-page.component';
import { IceCreamModule } from '../ice-cream/ice-cream.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', component: UserDashboardComponent, canActivate: [AuthGuard],data: {animation: 'DashBoard'} },
      { path: 'icecream', loadChildren: () => import('../ice-cream/ice-cream.module').then(m => m.IceCreamModule), canActivate: [AuthGuard],data: {animation: 'IceCream'}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
