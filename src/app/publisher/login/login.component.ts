import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {};

  constructor(private authService: AuthService, private router: Router) {
      if (!authService.isAuthenticated) {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/login']);
      }
  }

  post() {
    this.authService.loginUser(this.loginData);
  }

  ngOnInit() {
  }

}
