import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { ItemModel } from '../../models/items.model';

@Component({
  selector: 'app-edititem',
  template: `
    <div class="p-3">
      <app-breadcumb
        [titlename]="'Items'"
        [titleSubname]="'Edit'"
      ></app-breadcumb>
      <button class="btn btn-light" [routerLink]="['/adm/item/']">
        List Item
      </button>
    </div>
    <div class="container" *ngIf="!loading">
      <app-loader></app-loader>
    </div>
    <div class="container" *ngIf="loading">
      <app-itemform
        [action]="'updatedata'"
        [itemData]="myItemDetails"
        [imagePath]="imagePath"
      ></app-itemform>
    </div>
  `,
  styles: [],
})
export class EdititemComponent implements OnInit {
  itemid: string;
  myItemDetails: any;
  loading: boolean = false;
  imagePath: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.itemid = this.activatedRoute.snapshot.params['id'];
    this.myItemDetails = new ItemModel({});
    this.getBrandDetails();
  }
  ngOnInit(): void {}

  getBrandDetails() {}
}
