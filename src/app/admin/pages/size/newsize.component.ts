import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-newsize',
  template: `
    <div class="p-3">
      <app-breadcumb
        [titlename]="'Size'"
        [titleSubname]="'Add'"
        [homeLink]="'/adm/mydash'"
        [titleLink]="'/adm/size'"
      ></app-breadcumb>
      <button class="btn btn-light" [routerLink]="['/adm/size/']">
        List Size
      </button>
    </div>
    <div class="container">
      <app-sizeform [action]="'newdata'"></app-sizeform>
    </div>
  `,
  styles: [],
})
export class NewsizeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
