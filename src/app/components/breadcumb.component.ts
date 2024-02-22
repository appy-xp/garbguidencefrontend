import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcumb',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-xxl-12 col-sm-12 col-md-12">
          <CDBBreadcrumb color="light" class="align-items-center p-3">
            <li class="breadcrumb-item">
              <CDBLink class="p-0" [to]="homeLink">Home</CDBLink>
            </li>
            <CDBIcon
              class="mx-2 text-muted"
              [fas]="true"
              icon="angle-double-right"
            ></CDBIcon>
            <li class="breadcrumb-item">
              <CDBLink class="p-0" [to]="titleLink">{{ titlename }}</CDBLink>
            </li>
            <CDBIcon
              class="mx-2 text-muted"
              [fas]="true"
              icon="angle-double-right"
              *ngIf="titleSubname?.length"
            ></CDBIcon>
            <li class="breadcrumb-item" *ngIf="titleSubname?.length">
              <CDBLink class="p-0">{{ titleSubname }}</CDBLink>
            </li>
          </CDBBreadcrumb>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class BreadcumbComponent implements OnInit {
  @Input() titlename: string = '';
  @Input() titleSubname: string = '';
  @Input() homeLink: string = '';
  @Input() titleLink: string = '';
  @Input() subtitleLink: string = '';
  constructor() {}
  ngOnInit(): void {}
}
