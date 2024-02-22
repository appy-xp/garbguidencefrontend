import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TableColumn } from './interfaces/tablecolumn.interface';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-tablecomponent',

  template: `
    <ng-container>
      <!-- Filter -->
      <ng-container *ngIf="isFilterable" [matColumnDef]="this.rowActionIcon">
        <mat-form-field>
          <mat-label>Filter</mat-label>
          <input matInput (keyup)="applyFilter($event)" placeholder="filter" />
        </mat-form-field>
      </ng-container>

      <div class="table-responsive">
        <mat-table
          [dataSource]="tableDataSource"
          matSort
          (matSortChange)="sortTable($event)"
        >
          <ng-container *ngIf="isImage?.length" [matColumnDef]="isImage">
            <mat-header-cell *matHeaderCellDef>Image</mat-header-cell>
            <mat-cell *matCellDef="let element" [id]="rowActionIcon">
              <img
                [src]="url + imagePath + element.image"
                style="width:150px; height:150px"
                *ngIf="imageType != 'product'"
              />
              <!-- <label>a:{{ element.images[0].image }}</label> -->
              <div *ngIf="imageType === 'product'">
                <img
                  [src]="url + imagePath + element.images[0].image"
                  style="width:150px; height:150px"
                />
              </div>

              <!-- <label>{{ element.images[0].image }}</label> -->
            </mat-cell>
          </ng-container>
          <!-----file column ---->
          <ng-container *ngIf="isFile?.length" [matColumnDef]="isFile">
            <mat-header-cell *matHeaderCellDef>File</mat-header-cell>
            <mat-cell *matCellDef="let element" [id]="rowActionIcon">
              <a [href]="url + filePath + element.files" target="_blank">{{
                element.files
              }}</a>
              <!-- <img
                [src]="url + filePath + element.files"
                style="width:150px; height:150px"
                *ngIf="imageType != 'product'"
              /> -->
            </mat-cell>
          </ng-container>
          <!-- action column -->
          <ng-container
            *ngIf="rowActionIcon?.length"
            [matColumnDef]="rowActionIcon"
          >
            <mat-header-cell *matHeaderCellDef>Delete</mat-header-cell>
            <mat-cell
              *matCellDef="let element; let i = index"
              [id]="rowActionIcon"
            >
              <app-modal
                [buttonName]="icon"
                [title]="'Delete Option'"
                [buttonMsg]="'Do you want to delete data permanently ?'"
                (confirmation)="emitRowAction(element, i, $event)"
              ></app-modal>
            </mat-cell>
          </ng-container>
          <ng-container *ngIf="isEditable?.length" [matColumnDef]="isEditable">
            <mat-header-cell *matHeaderCellDef>Edit</mat-header-cell>
            <mat-cell *matCellDef="let element" [id]="isEditable">
              <CDBBtn (click)="emitEditAction(element.id)" color="light">
                <CDBIcon [icon]="'pen-to-square'"></CDBIcon>
              </CDBBtn>
            </mat-cell>
          </ng-container>
          <ng-container *ngIf="isSelected?.length" [matColumnDef]="isSelected">
            <mat-header-cell *matHeaderCellDef>Select</mat-header-cell>
            <mat-cell *matCellDef="let element" [id]="isSelected">
              <CDBBtn
                (click)="emitSelectedChangeAction(element.id)"
                color="light"
              >
                <CDBIcon [icon]="'plus'"></CDBIcon>
              </CDBBtn>
            </mat-cell>
          </ng-container>
          <ng-container
            *ngIf="isStatusChange?.length"
            [matColumnDef]="isStatusChange"
          >
            <mat-header-cell *matHeaderCellDef>Change</mat-header-cell>
            <mat-cell
              *matCellDef="let element; let i = index"
              [id]="!isStatusChange"
            >
              <div *ngIf="element.status">
                <mat-slide-toggle
                  (click)="emitStatusChangeAction(element.id, false, i)"
                  [checked]="true"
                  >Enabled</mat-slide-toggle
                >
              </div>
              <div *ngIf="!element.status">
                <mat-slide-toggle
                  (click)="emitStatusChangeAction(element.id, true, i)"
                  [checked]="false"
                  >Disabled</mat-slide-toggle
                >
              </div>
            </mat-cell>
          </ng-container>
          <!----blocked change ------>
          <ng-container
            *ngIf="isBlockChange?.length"
            [matColumnDef]="isBlockChange"
          >
            <mat-header-cell *matHeaderCellDef>Block Status</mat-header-cell>
            <mat-cell
              *matCellDef="let element; let i = index"
              [id]="!isBlockChange"
            >
              <div *ngIf="element.isblocked == 1">
                <div>
                  <mat-slide-toggle
                    (click)="emitBlockedChangeAction(element.id, false, i)"
                    [checked]="true"
                  ></mat-slide-toggle>
                </div>
                <div>
                  <label class="poppins fontsize-12"
                    >Till: {{ element.to }}</label
                  >
                </div>
              </div>
              <div *ngIf="element.isblocked == 0">
                <div>
                  <mat-slide-toggle
                    (click)="emitBlockedChangeAction(element.id, true, i)"
                    [checked]="false"
                  ></mat-slide-toggle>
                </div>
                <div>
                  <label class="poppins fontsize-12"
                    >Till: {{ element.to }}</label
                  >
                </div>
              </div>
              <div *ngIf="element.isblocked == null">
                <label class="poppins fontsize-12">Not Verified yet</label>
              </div>
            </mat-cell>
          </ng-container>
          <!---------------------------->
          <!----approval change ------>
          <ng-container
            *ngIf="isApprovalChange?.length"
            [matColumnDef]="isApprovalChange"
          >
            <mat-header-cell *matHeaderCellDef>Approval</mat-header-cell>
            <mat-cell
              *matCellDef="let element; let i = index"
              [id]="!isApprovalChange"
            >
              <div *ngIf="element.approvedStatus">
                <mat-slide-toggle
                  (click)="emitApprovalChangeAction(element.id, false, i)"
                  [checked]="true"
                  >Enabled</mat-slide-toggle
                >
              </div>
              <div *ngIf="!element.approvedStatus">
                <mat-slide-toggle
                  (click)="emitApprovalChangeAction(element.id, true, i)"
                  [checked]="false"
                  >Disabled</mat-slide-toggle
                >
              </div>
            </mat-cell>
          </ng-container>
          <!---------------------------->

          <ng-container
            *ngFor="let tableColumn of tableColumns"
            [matColumnDef]="tableColumn.name"
          >
            <!-- if sortable column header -->
            <ng-container *ngIf="tableColumn.isSortable; else notSortable">
              <mat-header-cell
                *matHeaderCellDef
                [mat-sort-header]="tableColumn.name"
                [arrowPosition]="
                  tableColumn.position === 'right' ? 'before' : 'after'
                "
              >
                {{ tableColumn.name }}
              </mat-header-cell>
            </ng-container>
            <!-- else not sortable -->
            <ng-template #notSortable>
              <mat-header-cell
                *matHeaderCellDef
                [class.text-right]="tableColumn.position == 'right'"
              >
                {{ tableColumn.name }}
              </mat-header-cell>
            </ng-template>

            <!-- column data -->
            <mat-cell
              *matCellDef="let element"
              [class.text-right]="tableColumn.position == 'right'"
            >
              {{ element | dataPropertyGetterPipe : tableColumn.dataKey }}
            </mat-cell>
          </ng-container>
          <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
          <mat-row *matRowDef="let row; columns: displayedColumns"></mat-row>
        </mat-table>

        <!-- Pagination -->
        <mat-paginator
          *ngIf="isPageable"
          [pageSizeOptions]="paginationSizes"
          [pageSize]="defaultPageSize"
          showFirstLastButtons
        >
        </mat-paginator>
      </div>
    </ng-container>
  `,
  styles: [``],
})
export class TablecomponentComponent implements OnInit, AfterViewInit {
  public tableDataSource: MatTableDataSource<any[]> = new MatTableDataSource<
    any[]
  >([]);
  public displayedColumns: string[];
  @ViewChild(MatPaginator, { static: false }) matPaginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) matSort: MatSort;

  @Input() isPageable = false;
  @Input() isSortable = false;
  @Input() isFilterable = false;
  @Input() tableColumns: TableColumn[] = [];
  @Input() rowActionIcon: string = '';
  @Input() paginationSizes: number[] = [5, 10, 15];
  @Input() defaultPageSize = this.paginationSizes[1];
  @Input() isEditable: string = '';
  @Input() isStatusChange: string = '';
  @Input() isApprovalChange: string = '';
  @Input() isImage: string = '';
  @Input() imagePath: string = '';
  @Input() imageType: string = '';
  @Input() isFile: string = '';
  @Input() filePath: string = '';
  @Input() isBlockChange: string = '';
  @Input() isSelected: string = '';
  @Output() sort: EventEmitter<Sort> = new EventEmitter();
  @Output() rowAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() editAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() statusChangeAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() approvalChangeAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() blockedChangeAction: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectedChangeAction: EventEmitter<any> = new EventEmitter<any>();
  @Input() set tableData(data: any[]) {
    this.setTableDataSource(data);
  }
  icon: string = 'trash';
  buttonColor: string = 'danger';
  url = environment.BaseUrl;

  constructor() {}

  ngOnInit(): void {
    const columnNames = this.tableColumns.map(
      (tableColumn: TableColumn) => tableColumn.name
    );
    this.displayedColumns = columnNames;
    if (this.isImage) {
      this.displayedColumns.push(this.isImage);
    }
    if (this.isStatusChange) {
      this.displayedColumns.push(this.isStatusChange);
    }
    if (this.isEditable) {
      this.displayedColumns.push(this.isEditable);
    }
    if (this.rowActionIcon) {
      this.displayedColumns.push(this.rowActionIcon);
    }
    if (this.isApprovalChange) {
      this.displayedColumns.push(this.isApprovalChange);
    }
    if (this.isBlockChange) {
      this.displayedColumns.push(this.isBlockChange);
    }
    if (this.isFile) {
      this.displayedColumns.push(this.isFile);
    }
    if (this.isSelected) {
      this.displayedColumns.push(this.isSelected);
    }
  }

  // we need this, in order to make pagination work with *ngIf
  ngAfterViewInit(): void {
    this.tableDataSource.paginator = this.matPaginator;
  }

  setTableDataSource(data: any) {
    this.tableDataSource = new MatTableDataSource<any>(data);
    this.tableDataSource.paginator = this.matPaginator;
    this.tableDataSource.sort = this.matSort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
  }

  sortTable(sortParameters: Sort) {
    // defining name of data property, to sort by, instead of column name
    sortParameters.active =
      this.tableColumns.find((column) => column.name === sortParameters.active)
        ?.dataKey || '';
    this.sort.emit(sortParameters);
  }

  emitRowAction(data: any, index: number, e: any) {
    if (e == true) {
      this.rowAction.emit({ id: data.id, index: index });
      this.tableDataSource.data.splice(index, 1);
      this.setTableDataSource(this.tableDataSource.data);
    } else {
      return;
    }
  }
  emitEditAction(row: any) {
    this.editAction.emit(row);
  }
  emitStatusChangeAction(id: number, status: boolean, index: number) {
    this.statusChangeAction.emit({
      id: id,
      status: status,
      index: index,
    });
  }
  emitApprovalChangeAction(id: number, status: boolean, index: number) {
    this.approvalChangeAction.emit({
      id: id,
      approvedStatus: status,
      index: index,
    });
  }
  emitBlockedChangeAction(userId: number, status: boolean, index: number) {
    this.blockedChangeAction.emit({
      userId: userId,
      isblocked: status,
      index: index,
    });
  }
  emitSelectedChangeAction(id: number) {
    this.selectedChangeAction.emit(id);
  }
}
