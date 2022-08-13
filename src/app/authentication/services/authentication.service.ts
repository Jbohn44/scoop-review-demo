import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, windowToggle } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';
import { BaseService } from '../../shared/services/base.service';
import { apiUrls } from '../../shared/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { ExternalAuth } from '../models/external-auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {
  private $googleUserSubject: BehaviorSubject<SocialUser>;
  constructor(http: HttpClient, private router: Router, private googleAuth: AuthService, private route: ActivatedRoute) {
    super(http);
    this.$googleUserSubject = new BehaviorSubject<SocialUser>(JSON.parse(localStorage.getItem('socialUser')));
  }

  public get googleUserValue(): SocialUser {
    return this.$googleUserSubject.value;
  }

  login() {
    this.googleAuth.signIn(GoogleLoginProvider.PROVIDER_ID).then(()=>{
      this.googleAuth.authState.subscribe(user=>{
        localStorage.setItem('socialUser', JSON.stringify(user));
        this.$googleUserSubject.next(<SocialUser>user);
        this.validateBackend(<SocialUser>user);
        

      });
    }).then(()=> {
      // this.router.navigate(['dashboard'], {relativeTo: this.route});

    });
    
  }

  logout() {
   
    this.googleAuth.signOut();
    localStorage.removeItem('socialUser');
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    this.$googleUserSubject.next(new SocialUser());
    // this is working for now but needs to be changed - 
    this.router.navigate(['home'], {relativeTo: this.route}); 

    
  }

  validateBackend(user: SocialUser){
    let backEndUser: ExternalAuth = {
      provider: user.provider,
      idToken: user.idToken
    };
    this.post(apiUrls.VALIDATE_EXTERNAL_USER, backEndUser).subscribe(res => {
      console.log(res)
      const authedUserId = <User>res;
      localStorage.setItem("userId", authedUserId.UserId.toString());
      this.router.navigate(['dashboard'], {relativeTo: this.route});

    },
    error =>{
      console.log('error', error)
      this.googleAuth.signOut();
      this.router.navigate(['home'], {relativeTo: this.route});
    });
  }

}
