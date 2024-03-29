import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { BrandsModel } from '../../models/brands.model';

@Component({
  selector: 'app-editbrand',
  template: `
    <div class="p-3">
      <app-breadcumb
        [titlename]="'Brands'"
        [titleSubname]="'Edit'"
      ></app-breadcumb>
      <button class="btn btn-light" [routerLink]="['/adm/brands/']">
        List Brands
      </button>
    </div>
    <div class="container" *ngIf="!loading">
      <app-loader></app-loader>
    </div>
    <div class="container" *ngIf="loading">
      <app-brandform
        [action]="'updatedata'"
        [brandData]="mybrandDetails"
        [imagePath]="imagePath"
      ></app-brandform>
    </div>
  `,
  styles: [],
})
export class EditbrandComponent implements OnInit {
  brandid: string;
  mybrandDetails: any;
  loading: boolean = false;
  imagePath: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.brandid = this.activatedRoute.snapshot.params['id'];
    this.mybrandDetails = new BrandsModel({});
    this.getBrandDetails();
  }
  ngOnInit(): void {}

  getBrandDetails() {}
}
