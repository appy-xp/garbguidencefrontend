import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { StaffModel } from '../../models/staff.model';

@Component({
  selector: 'app-staffform',
  template: `
    <div class="container">
      <div class="card">
        <div class="card-header px-2 py-2">
          <div class="poppins fontsize-13 text-color-red font-weight-600">
            <label>{{ formtitle }}</label>
          </div>
        </div>
        <div class="card-body">
          <form [formGroup]="staffForm" (ngSubmit)="onSubmit()">
            <div class="d-flex justify-content-start">
              <div class="w-25">
                <h4>First Name <span class="text-danger">(*)</span></h4>
              </div>
              <div class="w-75">
                <input
                  matInput
                  placeholder="First Name"
                  required
                  formControlName="firstName"
                  [ngClass]="{
                    'is-invalid': submitted && f['firstName'].errors
                  }"
                  class="w-100 inputfield poppins font-weight-600"
                />
                <span
                  *ngIf="submitted && f['firstName'].errors?.['required']"
                  >{{ getErrorMessage('firstName', 'required') }}</span
                >
              </div>
            </div>
            <div class="d-flex justify-content-start">
              <div class="w-25">
                <h4>Last Name <span class="text-danger">(*)</span></h4>
              </div>
              <div class="w-75">
                <input
                  matInput
                  placeholder="Last Name"
                  required
                  formControlName="lastName"
                  [ngClass]="{
                    'is-invalid': submitted && f['lastName'].errors
                  }"
                  class="w-100 inputfield poppins font-weight-600"
                />
                <span *ngIf="submitted && f['lastName'].errors?.['required']">{{
                  getErrorMessage('lastName', 'required')
                }}</span>
              </div>
            </div>
            <div class="d-flex justify-content-start">
              <div class="w-25">
                <h4>Contact No <span class="text-danger">(*)</span></h4>
              </div>
              <div class="w-75">
                <input
                  matInput
                  placeholder="Contact No"
                  required
                  formControlName="contactNo"
                  [ngClass]="{
                    'is-invalid': submitted && f['contactNo'].errors
                  }"
                  class="w-100 inputfield poppins font-weight-600"
                />
                <span
                  *ngIf="submitted && f['contactNo'].errors?.['required']"
                  >{{ getErrorMessage('contactNo', 'required') }}</span
                >
              </div>
            </div>

            <div class="py-3">
              <div class="text-center px-5 ">
                <button
                  class="btn bg-color-brand me-2 text-color-white submit-width poppins fontsize-16 border-radius-20 px-5"
                  [disabled]="!staffForm.valid"
                >
                  <span
                    *ngIf="loading"
                    class="spinner-border spinner-border-sm mr-1"
                  ></span>
                  Submit
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
  `,
  styles: [],
})
export class StaffformComponent implements OnInit {
  @Input() action: string;
  @Input() staffData: StaffModel;
  formtitle = '';
  loading = false;
  error = '';
  staffDetails;
  staffForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.staffDetails = new StaffModel({});
  }
  ngOnInit(): void {
    if (this.action == 'updatedata') {
      this.staffDetails = this.staffData;

      this.formtitle = 'Edit Staff Details';
    } else {
      this.formtitle = 'Add Staff Details';
    }
    this.staffForm = this.formBuilder.group({
      firstName: [this.staffDetails.firstName, [Validators.required]],
      lastName: [this.staffDetails.lastName, [Validators.required]],
      contactNo: [this.staffDetails.contactNo, [Validators.required]],
    });
  }
  get f() {
    return this.staffForm.controls;
  }
  get firstName() {
    return this.staffForm.get('firstName');
  }
  get lastName() {
    return this.staffForm.get('lastName');
  }
  get contactNo() {
    return this.staffForm.get('contactNo');
  }
  public getErrorMessage = (controlName: string, errorName: string) => {
    this.staffForm.controls[controlName].hasError(errorName);
    return controlName + ' is ' + errorName;
  };
  onSubmit() {
    var submissionData: StaffModel = this.staffForm.value;
    if (this.staffForm.invalid) {
      return;
    }

    if (this.action == 'updatedata') {
      submissionData.id = this.staffDetails.id;
    }
    this.manageMysubmissionData(submissionData);
  }
  manageMysubmissionData(submissionData: StaffModel) {
    this.loading = true;
  }
}
