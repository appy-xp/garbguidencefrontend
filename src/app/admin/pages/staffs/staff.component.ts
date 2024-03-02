import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../../components/interfaces/tablecolumn.interface';
import { StaffModel } from '../../models/staff.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  template: `
    <div class="p-3">
      <app-breadcumb
        [titlename]="'Staff'"
        [titleSubname]="'List'"
        [homeLink]="'/adm/'"
        [titleLink]="'/adm/staffs'"
      ></app-breadcumb>
      <button class="btn btn-light" [routerLink]="['/adm/staffs/addnew']">
        Add Staffs
      </button>
    </div>
    <app-tablecomponent
      [tableData]="staffList"
      [tableColumns]="staffTableColumns"
      [isFilterable]="true"
      [isPageable]="true"
      [paginationSizes]="[10, 25, 50]"
      [defaultPageSize]="10"
    ></app-tablecomponent>
  `,
  styles: [],
})
export class StaffComponent implements OnInit {
  staffList: StaffModel[];
  staffTableColumns: TableColumn[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getItems();
    this.initColumns();
  }
  getItems() {}
  initColumns(): void {
    this.staffTableColumns = [
      {
        name: 'First Name',
        dataKey: 'firstName',
      },
      {
        name: 'Last Name',
        dataKey: 'lastName',
      },
      {
        name: 'Contact No',
        dataKey: 'contactNo',
      },
    ];
  }
}
