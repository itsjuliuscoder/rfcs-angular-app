import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder, FormControlName } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { RegisterInterface, LoginInterface } from './../../interface/auth-interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  authType = '';
  registerErr = false;
  loginErr = false;
  loginErrorMsg;
  public registerForm: FormGroup;
  public loginForm: FormGroup;
  isRegister = false;
  isLogin = false;
  errMessage;
  resendResponse;
  urlPath: string;
  disableBtn = false;
  responseErr;
  confirmEmailErr;
  subject: any;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private httpservice: HttpService
    ) {

  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.authType = data[data.length - 1].path;
    });
    this.loginFormField();
    this.httpservice.getNews().subscribe((data) => {
      this.subject = data;
      console.log(this.subject[0].name);
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  subjects() {
   this.subject = this.httpservice.listSubjects();
  }

  clearLoginErr() {
    this.loginErr = false;
  }

  loginFormField() {
    this.loginForm = new FormGroup({
        loginEmail: new FormControl('', [Validators.required, CustomValidators.email]),
        loginPassword: new FormControl('', Validators.required),
    });
  }

  get loginEmail() { return this.loginForm.get('loginEmail'); }
  get loginPassword() { return this.loginForm.get('loginPassword'); }

  login() {
    if (this.loginForm.valid) {
      const payload = {
        email: this.loginEmail.value,
        password: this.loginPassword.value
      };
      this.resetField();
      this.getDisableBtn(true);
      this.httpservice.login(payload).subscribe(
        (data: LoginInterface) => {
          this.getDisableBtn(false);
          this.router.navigate(['/home']);
        }, err => {
          if (err.status === 401) {
            this.getSweetAlert('error', 'Oops', 'warning', 'Email Address & Password Combination Failed', 'login');
          } else {
            this.loginErr = true;
            this.loginErrorMsg = err.error.message || 'Something went wrong, Check your Internet Connection';
          }
          this.getDisableBtn(true);
        }
      );
    }
  }

  resetField() {
    this.loginErr = null;
    this.registerErr = null;
  }

  private getDisableBtn(value: boolean) { this.disableBtn = value; }
  get getDisableLoginState() { return this.loginForm.invalid || this.disableBtn; }

  getSweetAlert(icon, title, type, text, route ) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons.fire({
      icon,
      title,
      text,
      focusConfirm: false,
      showCloseButton: true,
      // showConfirmButton: route === 'login' ? true : false,
      confirmButtonText: route === 'login' ? 'Try Again' : 'Ok',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        if (route === 'login') {
          this.router.navigate(['/login']);
        } else {
          this.router.navigate(['/register']);
        }
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'error'
        ); }
    });
  }
}
