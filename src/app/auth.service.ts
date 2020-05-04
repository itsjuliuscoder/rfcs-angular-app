import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  messages = [];
  path = 'http://localhost:3000';

  TOKEN_KEY = 'token';
  router: any;

  constructor(private http: HttpClient, router: Router) { }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  registerUser(registerData) {
    this.http.post(this.path + '/register', registerData).subscribe(res => {

    });
  }

  loginUser(loginData) {
    this.http.post<any>(this.path + '/login', loginData).subscribe(res => {
        console.log(res);
        localStorage.setItem(this.TOKEN_KEY, res.token);
        //this.router.navigate(['/dashboard']);
    });
  }
}
