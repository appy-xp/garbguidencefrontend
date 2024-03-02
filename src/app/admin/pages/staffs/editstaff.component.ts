import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { StaffModel } from '../../models/staff.model';

@Component({
  selector: 'app-editstaff',
  template: `
    <div class="p-3">
      <app-breadcumb
        [titlename]="'Staff'"
        [titleSubname]="'Edit'"
      ></app-breadcumb>
      <button class="btn btn-light" [routerLink]="['/adm/staff/']">
        List Staffs
      </button>
    </div>
    <div class="container" *ngIf="!loading">
      <app-loader></app-loader>
    </div>
    <div class="container" *ngIf="loading">
      <app-staffform
        [action]="'updatedata'"
        [staffData]="myStaffDetails"
        [imagePath]="imagePath"
      ></app-staffform>
    </div>
  `,
  styles: [],
})
export class EditstaffComponent implements OnInit {
  staffid: string;
  myStaffDetails: any;
  loading: boolean = false;
  imagePath: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.staffid = this.activatedRoute.snapshot.params['id'];
    this.myStaffDetails = new StaffModel({});
    this.getBrandDetails();
  }
  ngOnInit(): void {}

  getBrandDetails() {}
}
