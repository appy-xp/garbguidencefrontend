import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../../components/interfaces/tablecolumn.interface';
import { SizesModel } from '../../models/sizes.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sizes',
  template: `
    <div class="p-3">
      <app-breadcumb
        [titlename]="'Size'"
        [titleSubname]="'List'"
        [homeLink]="'/adm/mydash'"
        [titleLink]="'/adm/size'"
      ></app-breadcumb>
      <button class="btn btn-light" [routerLink]="['/adm/size/addnew']">
        Add Size
      </button>
    </div>
    <app-tablecomponent
      [tableData]="sizeList"
      [tableColumns]="sizeTableColumns"
      [isFilterable]="true"
      [isPageable]="true"
      [paginationSizes]="[10, 25, 50]"
      [defaultPageSize]="10"
    ></app-tablecomponent>
  `,
  styles: [],
})
export class SizesComponent implements OnInit {
  sizeList: SizesModel[];
  sizeTableColumns: TableColumn[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getItems();
    this.initColumns();
  }
  getItems() {}
  initColumns(): void {
    this.sizeTableColumns = [
      {
        name: 'Size Name',
        dataKey: 'sizeName',
      },
      {
        name: 'Size Code',
        dataKey: 'sizeCode',
      },
      {
        name: 'Details',
        dataKey: 'sizeDetail',
      },
    ];
  }
}
