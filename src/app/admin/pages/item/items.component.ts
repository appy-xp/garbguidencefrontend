import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../../components/interfaces/tablecolumn.interface';
import { ItemModel } from '../../models/items.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  template: `
    <div class="p-3">
      <app-breadcumb
        [titlename]="'Item'"
        [titleSubname]="'Add'"
        [homeLink]="'/adm/mydash'"
        [titleLink]="'/adm/items'"
      ></app-breadcumb>
      <button class="btn btn-light" [routerLink]="['/adm/items/addnew']">
        Add Items
      </button>
    </div>
    <app-tablecomponent
      [tableData]="itemList"
      [tableColumns]="itemTableColumns"
      [isFilterable]="true"
      [isPageable]="true"
      [paginationSizes]="[10, 25, 50]"
      [defaultPageSize]="10"
    ></app-tablecomponent>
  `,
  styles: [],
})
export class ItemsComponent implements OnInit {
  itemList: ItemModel[];
  itemTableColumns: TableColumn[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getItems();
    this.initColumns();
  }
  getItems() {}
  initColumns(): void {
    this.itemTableColumns = [
      {
        name: 'Model Name',
        dataKey: 'modelName',
      },
      {
        name: 'Item Name',
        dataKey: 'itemName',
      },
      {
        name: 'Quantity',
        dataKey: 'quantity',
      },
    ];
  }
}
