import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { BrandsModel } from '../../models/brands.model';

@Component({
  selector: 'app-brandform',
  template: `
    <div class="container">
      <div class="card">
        <div class="card-header px-2 py-2">
          <div class="poppins fontsize-13 text-color-red font-weight-600">
            <label>{{ formtitle }}</label>
          </div>
        </div>
        <div class="card-body">
          <form [formGroup]="brandForm" (ngSubmit)="onSubmit()">
            <div class="d-flex justify-content-start">
              <div class="w-25">
                <h4>Brand Name <span class="text-danger">(*)</span></h4>
              </div>
              <div class="w-75">
                <input
                  matInput
                  placeholder="Brand Name"
                  required
                  formControlName="brandName"
                  [ngClass]="{
                    'is-invalid': submitted && f['brandName'].errors
                  }"
                  class="w-100 inputfield poppins font-weight-600"
                />
                <span
                  *ngIf="submitted && f['brandName'].errors?.['required']"
                  >{{ getErrorMessage('brandName', 'required') }}</span
                >
              </div>
            </div>

            <div class="py-3">
              <div class="text-center px-5 ">
                <button
                  class="btn bg-color-brand me-2 text-color-white submit-width poppins fontsize-16 border-radius-20 px-5"
                  [disabled]="!brandForm.valid"
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
export class BrandformComponent implements OnInit {
  @Input() action: string;
  @Input() brandData: BrandsModel;
  formtitle = '';
  loading = false;
  error = '';
  brandDetails;
  brandForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.brandDetails = new BrandsModel({});
  }
  ngOnInit(): void {
    if (this.action == 'updatedata') {
      this.brandDetails = this.brandData;

      this.formtitle = 'Edit Brand Details';
    } else {
      this.formtitle = 'Add Brand Details';
    }
    this.brandForm = this.formBuilder.group({
      brandName: [this.brandDetails.brandName, [Validators.required]],
    });
  }
  get f() {
    return this.brandForm.controls;
  }
  get brandName() {
    return this.brandForm.get('brandName');
  }
  public getErrorMessage = (controlName: string, errorName: string) => {
    this.brandForm.controls[controlName].hasError(errorName);
    return controlName + ' is ' + errorName;
  };
  onSubmit() {
    var submissionData: BrandsModel = this.brandForm.value;
    if (this.brandForm.invalid) {
      return;
    }

    if (this.action == 'updatedata') {
      submissionData.id = this.brandDetails.id;
    }
    this.manageMysubmissionData(submissionData);
  }
  manageMysubmissionData(submissionData: BrandsModel) {
    this.loading = true;
  }
}
