import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { SizesModel } from '../../models/sizes.model';

@Component({
  selector: 'app-editsize',
  template: `
    <div class="p-3">
      <app-breadcumb
        [titlename]="'Size'"
        [titleSubname]="'Edit'"
      ></app-breadcumb>
      <button class="btn btn-light" [routerLink]="['/adm/size/']">
        List Size
      </button>
    </div>
    <div class="container" *ngIf="!loading">
      <app-loader></app-loader>
    </div>
    <div class="container" *ngIf="loading">
      <app-sizeform
        [action]="'updatedata'"
        [sizeData]="mysizeDetails"
        [imagePath]="imagePath"
      ></app-sizeform>
    </div>
  `,
  styles: [],
})
export class EditsizeComponent implements OnInit {
  sizeid: string;
  mysizeDetails: any;
  loading: boolean = false;
  imagePath: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.sizeid = this.activatedRoute.snapshot.params['id'];
    this.mysizeDetails = new SizesModel({});
    this.getSizeDetails();
  }
  ngOnInit(): void {}

  getSizeDetails() {}
}
