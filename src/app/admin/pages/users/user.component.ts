import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../../components/interfaces/tablecolumn.interface';
import { UsersModel } from '../../models/users.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
    <div class="p-3">
      <app-breadcumb
        [titlename]="'User'"
        [titleSubname]="'List'"
        [homeLink]="'/adm/'"
        [titleLink]="'/adm/users'"
      ></app-breadcumb>
    </div>
    <app-tablecomponent
      [tableData]="userList"
      [tableColumns]="userTableColumns"
      [isFilterable]="true"
      [isPageable]="true"
      [paginationSizes]="[10, 25, 50]"
      [defaultPageSize]="10"
    ></app-tablecomponent>
  `,
  styles: [],
})
export class UserComponent implements OnInit {
  userList: UsersModel[];
  userTableColumns: TableColumn[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getItems();
    this.initColumns();
  }
  getItems() {}
  initColumns(): void {
    this.userTableColumns = [
      {
        name: 'Email',
        dataKey: 'email',
      },
      {
        name: 'User-name',
        dataKey: 'username',
      },
    ];
  }
}
