import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { PaginationComponent } from './pagination.component';
import { BreadcumbComponent } from './breadcumb.component';
import { BoxesComponent } from './boxes.component';
import { CDBFreeModule } from 'ng-cdbangular';
import { LoaderComponent } from './loader.component';
import { TablecomponentComponent } from './tablecomponent.component';
import { MaterialExampleModule } from './../material.module';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [
    PopupComponent,
    PaginationComponent,
    BreadcumbComponent,
    BoxesComponent,
    LoaderComponent,
    TablecomponentComponent,
    ModalComponent,
  ],
  imports: [CommonModule, CDBFreeModule, MaterialExampleModule],
  exports: [
    BoxesComponent,
    PopupComponent,
    BreadcumbComponent,
    PaginationComponent,
  ],
})
export class ComponentsModule {}
