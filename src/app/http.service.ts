import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { RegisterInterface, LoginInterface, UserUpdate, ResetPassword, User } from './interface/auth-interface';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  static accessDeniedRoute = ['/access-denied'];
  static peopleInMyOrg: any[] = [];
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  public baseUrl = 'http://localhost:3000';

  user;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  // url = `${environment.baseUrl}/xttreme/auth`;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.user = JSON.parse(localStorage.getItem('currentUser'));
   }

  appendAuthHeader(): any {
    return {
      headers: {
        Authorization: `Bearer ${this.user.token}`
      }
    };
  }


   public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  // register
  register(data: RegisterInterface) {
    return this.http.post<any>(`${this.baseUrl}/register`, data);
  }

  // login
  login(data: LoginInterface) {
    return this.http.post<any>(`${this.baseUrl}/login`, data).pipe(map(user => {
      if (user && user.token) {
        localStorage.setItem('currentUser', JSON.stringify(user.token));
      }
      return user;
    }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  // resend
  resend(email: string) {
    const data = {email};
    return this.http.post<any>(`${this.baseUrl}/auth/resend`, data);
  }

  // confirmation
  confirmation(token: string) {
    const body = { token };
    return this.http.post<any>(`${this.baseUrl}/auth/confirmation`, body);
  }

  // forget password
  forgetPassword(email: string) {
    const data = { email };
    return this.http.post<any>(`${this.baseUrl}/auth/send_link`, data);
  }

  // reset password
  resetPassword(data: ResetPassword) {
    return this.http.post<any>(`${this.baseUrl}/auth/reset_password`, data);
  }

  /* updateuser(data: UserUpdate) {
    return this.http.put<any>(`${this.baseUrl}/auth/update/${id}`, data);
  } */

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
