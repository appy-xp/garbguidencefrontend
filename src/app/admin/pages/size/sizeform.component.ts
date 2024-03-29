import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { SizesModel } from '../../models/sizes.model';

@Component({
  selector: 'app-sizeform',
  template: `
    <div class="container">
      <div class="card">
        <div class="card-header px-2 py-2">
          <div class="poppins fontsize-13 text-color-red font-weight-600">
            <label>{{ formtitle }}</label>
          </div>
        </div>
        <div class="card-body">
          <form [formGroup]="sizeForm" (ngSubmit)="onSubmit()">
            <div class="d-flex justify-content-start">
              <div class="w-25">
                <h4>Size Name <span class="text-danger">(*)</span></h4>
              </div>
              <div class="w-75">
                <input
                  matInput
                  placeholder="Size Name"
                  required
                  formControlName="sizeName"
                  [ngClass]="{
                    'is-invalid': submitted && f['sizeName'].errors
                  }"
                  class="w-100 inputfield poppins font-weight-600"
                />
                <span *ngIf="submitted && f['sizeName'].errors?.['required']">{{
                  getErrorMessage('sizeName', 'required')
                }}</span>
              </div>
            </div>
            <div class="d-flex justify-content-start">
              <div class="w-25">
                <h4>Size Code <span class="text-danger">(*)</span></h4>
              </div>
              <div class="w-75">
                <input
                  matInput
                  placeholder="Size Code"
                  required
                  formControlName="sizeCode"
                  [ngClass]="{
                    'is-invalid': submitted && f['sizeCode'].errors
                  }"
                  class="w-100 inputfield poppins font-weight-600"
                />
                <span *ngIf="submitted && f['sizeCode'].errors?.['required']">{{
                  getErrorMessage('sizeCode', 'required')
                }}</span>
              </div>
            </div>
            <div class="d-flex justify-content-start">
              <div class="w-25">
                <h4>Size Details <span class="text-danger">(*)</span></h4>
              </div>
              <div class="w-75">
                <textarea
                  matInput
                  placeholder="Size Details"
                  required
                  formControlName="sizeDetail"
                  class="w-100 inputfield poppins font-weight-600"
                ></textarea>
              </div>
            </div>

            <div class="py-3">
              <div class="text-center px-5 ">
                <button
                  class="btn bg-color-brand me-2 text-color-white submit-width poppins fontsize-16 border-radius-20 px-5"
                  [disabled]="!sizeForm.valid"
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
export class SizeformComponent implements OnInit {
  @Input() action: string;
  @Input() sizeData: SizesModel;
  formtitle = '';
  loading = false;
  error = '';
  sizeDetails;
  sizeForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.sizeDetails = new SizesModel({});
  }
  ngOnInit(): void {
    if (this.action == 'updatedata') {
      this.sizeDetails = this.sizeData;

      this.formtitle = 'Edit Size Details';
    } else {
      this.formtitle = 'Add Size Details';
    }
    this.sizeForm = this.formBuilder.group({
      sizeName: [this.sizeDetails.sizeName, [Validators.required]],
      sizeCode: [this.sizeDetails.sizeCode, [Validators.required]],
      sizeDetail: [this.sizeDetails.sizeDetail],
    });
  }
  get f() {
    return this.sizeForm.controls;
  }
  get sizeName() {
    return this.sizeForm.get('sizeName');
  }
  get sizeCode() {
    return this.sizeForm.get('sizeCode');
  }
  get sizeDetail() {
    return this.sizeForm.get('sizeDetail');
  }
  public getErrorMessage = (controlName: string, errorName: string) => {
    this.sizeForm.controls[controlName].hasError(errorName);
    return controlName + ' is ' + errorName;
  };
  onSubmit() {
    var submissionData: SizesModel = this.sizeForm.value;
    if (this.sizeForm.invalid) {
      return;
    }

    if (this.action == 'updatedata') {
      submissionData.id = this.sizeDetails.id;
    }
    this.manageMysubmissionData(submissionData);
  }
  manageMysubmissionData(submissionData: SizesModel) {
    this.loading = true;
  }
}
