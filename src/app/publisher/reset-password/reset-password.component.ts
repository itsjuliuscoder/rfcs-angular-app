import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder, FormControlName } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { RegisterInterface, LoginInterface, ResetPassword } from './../../interface/auth-interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  authType = '';
  registerErr = false;
  loginErr = false;
  confirmationErrorMsg;
  public resetPasswordForm: FormGroup;
  isRegister = false;
  isLogin = false;
  errMessage;
  resendResponse;
  urlPath: string;
  disableBtn = false;
  responseErr;
  confirmEmailErr;
  id = '';

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private httpservice: HttpService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
    });
    this.resetPasswordFormFields();
  }


  resetPasswordFormFields() {
    const newPassword = new FormControl('', Validators.required);
    this.resetPasswordForm = new FormGroup({
      newPassword,
      uid: new FormControl('', Validators.required),
      confirmNewPassword: new FormControl('', [CustomValidators.equalTo(newPassword), ])
      // confirmPassword: certainPassword
    });
  }

  get newPassword() { return this.resetPasswordForm.get('newPassword'); }
  get uid() { return this.resetPasswordForm.get('uid'); }
  get confirmNewPassword() { return this.resetPasswordForm.get('confirmNewPassword'); }

  resetPassword() {
    if (this.resetPasswordForm.valid) {
      const payload = {
        password: this.newPassword.value,
        id: this.uid.value,
      };
      // this.resetField();
      // this.getDisableBtn(true);
      this.httpservice.resetPassword(payload).subscribe(
        (data: ResetPassword) => {
          this.getDisableBtn(false);
          this.router.navigate(['/dashboard']);
        }, err => {
          if (err.code === 400) {
            this.getSweetAlert('', 'warning', err.msg, 'login');
          } else {
            this.loginErr = true;
            this.confirmationErrorMsg = err.error.data.msg || 'Something went wrong, Please try again ';
          }
          this.getDisableBtn(false);
        }
      );
    }
  }


  private getDisableBtn(value: boolean) { this.disableBtn = value; }
  get getDisableResetPasswordState() { return this.resetPasswordForm.invalid || this.disableBtn; }

  getSweetAlert(title, type, text, route ) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    });
  }


}
