import { Component, OnInit } from '@angular/core';
import { IceCream } from 'src/app/ice-cream/models/ice-cream.model';
import { IceCreamService } from 'src/app/ice-cream/services/ice-cream.service';
import { User } from 'src/app/authentication/models/user.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  user: User;
  blockUI = true;
  constructor() { }

  ngOnInit() {
    this.user = <User>JSON.parse(localStorage.getItem('socialUser'));
    this.user.UserId = <number>JSON.parse(localStorage.getItem("userId"));
  }

}
