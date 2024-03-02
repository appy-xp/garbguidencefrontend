import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-newbrand',
  template: `
    <div class="p-3">
      <app-breadcumb
        [titlename]="'Brands'"
        [titleSubname]="'Add'"
        [homeLink]="'/adm/mydash'"
        [titleLink]="'/adm/brands'"
      ></app-breadcumb>
      <button class="btn btn-light" [routerLink]="['/adm/brands/']">
        List Brands
      </button>
    </div>
    <div class="container">
      <app-brandform [action]="'newdata'"></app-brandform>
    </div>
  `,
  styles: [],
})
export class NewbrandComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
