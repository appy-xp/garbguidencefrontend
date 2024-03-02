import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../../components/interfaces/tablecolumn.interface';
import { BrandsModel } from '../../models/brands.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brands',
  template: `
    <div class="p-3">
      <app-breadcumb
        [titlename]="'Brands'"
        [titleSubname]="'List'"
        [homeLink]="'/adm/mydash'"
        [titleLink]="'/adm/brand'"
      ></app-breadcumb>
      <button class="btn btn-light" [routerLink]="['/adm/brand/addnew']">
        Add Brands
      </button>
    </div>
    <app-tablecomponent
      [tableData]="brandsList"
      [tableColumns]="brandsTableColumns"
      [isFilterable]="true"
      [isPageable]="true"
      [paginationSizes]="[10, 25, 50]"
      [defaultPageSize]="10"
    ></app-tablecomponent>
  `,
  styles: [],
})
export class BrandsComponent implements OnInit {
  brandsList: BrandsModel[];
  brandsTableColumns: TableColumn[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getBrands();
    this.initColumns();
  }
  getBrands() {}
  initColumns(): void {
    this.brandsTableColumns = [
      {
        name: 'Name',
        dataKey: 'brandName',
      },
    ];
  }
}
