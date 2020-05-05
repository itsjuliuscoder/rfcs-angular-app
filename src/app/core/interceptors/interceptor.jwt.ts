import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { HttpService } from './../../http.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    // signin = '/signin';
    constructor(private authenticationService: HttpService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.tokenData.token}`
                }
            });
        }
        return next.handle(request);
    }
}
