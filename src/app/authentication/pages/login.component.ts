import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  template: `
    <div class="container">
      <div class="row py-5 mt-4">
        <div class="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
          <div class="width-540px mx-auto py-5">
            <div class="w-100 bg-color-brand text-color-white rounded-top">
              <h4
                class="text-center poppins fontsize-30 m-0 py-2 px-0 weight-400"
              >
                {{ appname || 'Garment Management System' }}
              </h4>
            </div>
            <div class="w-100 bg-gray height-470px text-center">
              <div class="logo">
                <div class="py-5">
                  <img src="./../../../assets/images/logo.png" class="mt-3" />
                </div>
              </div>
              <div class="form_details">
                <form [formGroup]="loginForm" class="px-5">
                  <div class="d-flex justify-content-start">
                    <div>
                      <app-boxes
                        [backgroundcolorName]="'#123468'"
                        [height]="'56px'"
                        [width]="'46px'"
                        [colorName]="'white'"
                        [isIcon]="true"
                        [iconName]="'fa-envelope'"
                        [paddingTRBL]="'15px 5px 15px 5px'"
                      ></app-boxes>
                    </div>
                    <div class="w-100">
                      <input
                        placeholder="Username/Email"
                        required
                        formControlName="email"
                        [ngClass]="{
                          'is-invalid': submitted && f['email'].errors
                        }"
                        class="bg-white border-0 height-56px px-3 w-100 poppins"
                        type="email"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      *ngIf="submitted && f['email'].errors?.['required']"
                      >{{ getErrorMessage('email', 'required') }}</label
                    >
                    <label *ngIf="submitted && f['email'].errors?.['email']">{{
                      getErrorMessage('email', 'invalid')
                    }}</label>
                  </div>
                  <div class="d-flex justify-content-start mt-4">
                    <div>
                      <app-boxes
                        [backgroundcolorName]="'#123468'"
                        [height]="'56px'"
                        [width]="'46px'"
                        [colorName]="'white'"
                        [isIcon]="true"
                        [iconName]="'fa-lock'"
                        [paddingTRBL]="'15px 5px 15px 5px'"
                      ></app-boxes>
                    </div>
                    <div class="w-100">
                      <input
                        placeholder="Password"
                        required
                        formControlName="password"
                        [ngClass]="{
                          'is-invalid': submitted && f['password'].errors
                        }"
                        class="bg-white border-0 height-56px px-3 w-100 poppins"
                        [type]="hide ? 'password' : 'text'"
                      />
                      <div class="float-right form-eye">
                        <i
                          class="fa-solid "
                          [ngClass]="hide ? 'fa-eye-slash' : 'fa-eye'"
                          (click)="eyehide()"
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div class="text-center py-1">
                    <span
                      >Don't have an account?
                      <a class="text-blue" [routerLink]="['/authen/register']"
                        >Register</a
                      ></span
                    >
                  </div>
                  <div>
                    <label
                      *ngIf="submitted && f['password'].errors?.['required']"
                      >{{ getErrorMessage('password', 'required') }}</label
                    >
                  </div>
                  <div class="my-4">
                    <div class="text-center px-5">
                      <button
                        class="btn bg-color-brand me-2 width-submit-button poppins fontsize-20 text-color-white height-56px"
                        [disabled]="!loginForm.valid"
                        (click)="onSubmit()"
                      >
                        <span
                          *ngIf="loading"
                          class="spinner-border spinner-border-sm mr-1"
                        ></span>
                        Login
                      </button>
                      <div
                        *ngIf="error"
                        class="alert alert-danger mt-3 mb-0"
                        [innerHtml]="error"
                      ></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class LoginComponent implements OnInit {
  appname = '';
  hide = true;
  loginForm!: FormGroup;
  submitted = false;
  newUser;
  loading = false;
  error = '';
  constructor(private formBuilder: FormBuilder) {
    this.newUser = new User({});
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  public getErrorMessage = (controlName: string, errorName: string) => {
    this.loginForm.controls[controlName].hasError(errorName);
    return controlName + ' is ' + errorName;
  };

  onSubmit() {
    console.log('data submitted', this.loginForm.value);
  }
  eyehide() {
    this.hide = !this.hide;
  }
}
