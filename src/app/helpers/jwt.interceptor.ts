import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/services/authentication.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let socialUser = this.authenticationService.googleUserValue;
        if (socialUser && socialUser.authToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${socialUser.idToken}`
                }
            });
        }
        return next.handle(request);
    }
}