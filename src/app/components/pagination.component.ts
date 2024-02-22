import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { paginationModel } from '../admin/models/pagination.model';

@Component({
  selector: 'app-pagination',
  template: `
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a
            class="page-link"
            aria-label="Previous"
            *ngIf="paginationDetails.hasPreviousPage"
            (click)="queryPagination(paginationDetails.previousPage)"
          >
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item disabled">
          <a
            class="page-link"
            aria-label="Previous"
            *ngIf="!paginationDetails.hasPreviousPage"
          >
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>

        <li class="page-item">
          <a class="page-link">{{ paginationDetails.currentPage }}</a>
        </li>

        <li class="page-item">
          <a
            class="page-link"
            aria-label="Next"
            *ngIf="paginationDetails.hasNextPage"
            (click)="queryPagination(paginationDetails.nextPage)"
          >
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
        <li class="page-item disabled">
          <a
            class="page-link"
            aria-label="Next"
            *ngIf="!paginationDetails.hasNextPage"
          >
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  `,
  styles: [],
})
export class PaginationComponent implements OnInit {
  @Input() paginationDetails = new paginationModel({});
  @Output() paginationNumber: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  ngOnInit(): void {}
  queryPagination(val: number) {
    this.paginationNumber.emit(val);
  }
}
