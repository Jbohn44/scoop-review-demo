import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/authentication/models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() user: User;
  imagesource: string;
  constructor() { }

  ngOnInit() {
    this.imagesource = this.user.PhotoUrl;
  }

}
