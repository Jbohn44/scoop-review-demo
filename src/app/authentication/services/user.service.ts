import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BaseService } from '../../shared/services/base.service';
import { User } from '../models/user.model';
import { apiUrls } from '../../shared/constants';
import { map } from 'rxjs/internal/operators/map';
import { Router } from '@angular/router';
import { formatUrl } from 'src/app/shared/utilities';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(http: HttpClient, private router: Router) { 
    super(http);
  }

  getAllUsers() {
    return this.get(apiUrls.GET_ALL_USERS_NAMES).pipe(map(response => {return <string[]>response}));
  }

  createUser(user: User) {
    return this.post(apiUrls.CREATE_USER, user).pipe(map(response => {
      if(response){
        this.router.navigate(['dashboard']);
      }
      return response
    
    }));
  }
  getUser(userId){
    return this.get(formatUrl(apiUrls.GET_USER, userId)).pipe(map(response => {
      // todo implement logic
    }));
  }
}
