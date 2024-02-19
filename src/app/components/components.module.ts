import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { PaginationComponent } from './pagination.component';
import { BreadcumbComponent } from './breadcumb.component';
import { BoxesComponent } from './boxes.component';

@NgModule({
  declarations: [
    PopupComponent,
    PaginationComponent,
    BreadcumbComponent,
    BoxesComponent,
  ],
  imports: [CommonModule],
  exports: [BoxesComponent],
})
export class ComponentsModule {}
