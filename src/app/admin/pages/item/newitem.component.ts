import { Component } from '@angular/core';

@Component({
  selector: 'app-newitem',
  template: `
    <div class="p-3">
      <app-breadcumb
        [titlename]="'Item'"
        [titleSubname]="'Add'"
        [homeLink]="'/adm/mydash'"
        [titleLink]="'/adm/items'"
      ></app-breadcumb>
      <button class="btn btn-light" [routerLink]="['/adm/items/']">
        List Items
      </button>
    </div>
    <div class="container">
      <app-itemform [action]="'newdata'"></app-itemform>
    </div>
  `,
  styles: [],
})
export class NewitemComponent {}
