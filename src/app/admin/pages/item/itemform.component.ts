import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ItemModel } from '../../models/items.model';

@Component({
  selector: 'app-itemform',
  template: `
    <div class="container">
      <div class="card">
        <div class="card-header px-2 py-2">
          <div class="poppins fontsize-13 text-color-red font-weight-600">
            <label>{{ formtitle }}</label>
          </div>
        </div>
        <div class="card-body">
          <form [formGroup]="itemForm" (ngSubmit)="onSubmit()">
            <div class="d-flex justify-content-start">
              <div class="w-25">
                <h4>Model Name <span class="text-danger">(*)</span></h4>
              </div>
              <div class="w-75">
                <input
                  matInput
                  placeholder="Model Name"
                  required
                  formControlName="modelName"
                  [ngClass]="{
                    'is-invalid': submitted && f['modelName'].errors
                  }"
                  class="w-100 inputfield poppins font-weight-600"
                />
                <span
                  *ngIf="submitted && f['modelName'].errors?.['required']"
                  >{{ getErrorMessage('modelName', 'required') }}</span
                >
              </div>
            </div>
            <div class="d-flex justify-content-start">
              <div class="w-25">
                <h4>Item Name <span class="text-danger">(*)</span></h4>
              </div>
              <div class="w-75">
                <input
                  matInput
                  placeholder="Item Name"
                  required
                  formControlName="itemName"
                  [ngClass]="{
                    'is-invalid': submitted && f['itemName'].errors
                  }"
                  class="w-100 inputfield poppins font-weight-600"
                />
                <span *ngIf="submitted && f['itemName'].errors?.['required']">{{
                  getErrorMessage('itemName', 'required')
                }}</span>
              </div>
            </div>
            <div class="d-flex justify-content-start">
              <div class="w-25">
                <h4>Quantity <span class="text-danger">(*)</span></h4>
              </div>
              <div class="w-75">
                <input
                  matInput
                  placeholder="Quantity"
                  required
                  formControlName="quantity"
                  [ngClass]="{
                    'is-invalid': submitted && f['quantity'].errors
                  }"
                  class="w-100 inputfield poppins font-weight-600"
                />
                <span *ngIf="submitted && f['quantity'].errors?.['required']">{{
                  getErrorMessage('quantity', 'required')
                }}</span>
              </div>
            </div>

            <div class="py-3">
              <div class="text-center px-5 ">
                <button
                  class="btn bg-color-brand me-2 text-color-white submit-width poppins fontsize-16 border-radius-20 px-5"
                  [disabled]="!itemForm.valid"
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
export class ItemformComponent implements OnInit {
  @Input() action: string;
  @Input() itemData: ItemModel;
  formtitle = '';
  loading = false;
  error = '';
  itemDetails;
  itemForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.itemDetails = new ItemModel({});
  }
  ngOnInit(): void {
    if (this.action == 'updatedata') {
      this.itemDetails = this.itemData;

      this.formtitle = 'Edit Item Details';
    } else {
      this.formtitle = 'Add Item Details';
    }
    this.itemForm = this.formBuilder.group({
      modelName: [this.itemDetails.modelName, [Validators.required]],
      itemName: [this.itemDetails.itemName, [Validators.required]],
      quantity: [this.itemDetails.quantity, [Validators.required]],
    });
  }
  get f() {
    return this.itemForm.controls;
  }
  get modelName() {
    return this.itemForm.get('modelName');
  }
  get itemName() {
    return this.itemForm.get('itemName');
  }
  get quantity() {
    return this.itemForm.get('quantity');
  }
  public getErrorMessage = (controlName: string, errorName: string) => {
    this.itemForm.controls[controlName].hasError(errorName);
    return controlName + ' is ' + errorName;
  };
  onSubmit() {
    var submissionData: ItemModel = this.itemForm.value;
    if (this.itemForm.invalid) {
      return;
    }

    if (this.action == 'updatedata') {
      submissionData.id = this.itemDetails.id;
    }
    this.manageMysubmissionData(submissionData);
  }
  manageMysubmissionData(submissionData: ItemModel) {
    this.loading = true;
  }
}
