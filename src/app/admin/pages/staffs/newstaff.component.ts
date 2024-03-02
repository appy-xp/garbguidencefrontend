import { Component } from '@angular/core';

@Component({
  selector: 'app-newstaff',
  template: `
    <div class="p-3">
      <app-breadcumb
        [titlename]="'Staff'"
        [titleSubname]="'Add'"
        [homeLink]="'/adm/staff'"
        [titleLink]="'/adm/staffs'"
      ></app-breadcumb>
      <button class="btn btn-light" [routerLink]="['/adm/staffs/']">
        List Staffs
      </button>
    </div>
    <div class="container">
      <app-staffform [action]="'newdata'"></app-staffform>
    </div>
  `,
  styles: [],
})
export class NewstaffComponent {}
