import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

import { AlertService } from './../../alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {};
  public error: string;
  loginErr;
  loginErrorMsg;
  process;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  formBuilder: any;


  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router, private alertService: AlertService) {

    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
        this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
    this.loginFormField();
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loginFormField(){
    this.loginForm = this.formBuilder.group({
      // email: ['', Validators.required],
      email: new FormControl('', [Validators.required]),
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
      this.authService.login(this.f.email.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

}
