import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard.component';
import { AdmindashboardComponent } from './pages/admindashboard.component';
import { SidebarComponent } from './pages/sidebar.component';
import {
  SidebarModule,
  IconModule,
  BadgeModule,
  ButtonModule,
  PaginationModule,
  CDBFreeModule,
} from 'ng-cdbangular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { PurchaseformComponent } from './pages/purchase/purchaseform.component';
import { NewpurchaseComponent } from './pages/purchase/newpurchase.component';
import { EditpurchaseComponent } from './pages/purchase/editpurchase.component';
import { SizesComponent } from './pages/size/sizes.component';
import { SizeformComponent } from './pages/size/sizeform.component';
import { NewsizeComponent } from './pages/size/newsize.component';
import { EditsizeComponent } from './pages/size/editsize.component';
import { BrandsComponent } from './pages/brand/brands.component';
import { BrandformComponent } from './pages/brand/brandform.component';
import { EditbrandComponent } from './pages/brand/editbrand.component';
import { NewbrandComponent } from './pages/brand/newbrand.component';
import { StaffComponent } from './pages/staffs/staff.component';
import { StaffformComponent } from './pages/staffs/staffform.component';
import { NewstaffComponent } from './pages/staffs/newstaff.component';
import { EditstaffComponent } from './pages/staffs/editstaff.component';

@NgModule({
  declarations: [DashboardComponent, AdmindashboardComponent, SidebarComponent, PurchaseComponent, PurchaseformComponent, NewpurchaseComponent, EditpurchaseComponent, SizesComponent, SizeformComponent, NewsizeComponent, EditsizeComponent, BrandsComponent, BrandformComponent, EditbrandComponent, NewbrandComponent, StaffComponent, StaffformComponent, NewstaffComponent, EditstaffComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SidebarModule,
    IconModule,
    BadgeModule,
    ButtonModule,
    PaginationModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CDBFreeModule,
  ],
})
export class AdminModule {}
