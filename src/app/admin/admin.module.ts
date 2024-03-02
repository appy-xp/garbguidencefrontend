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
import { MaterialExampleModule } from './../material.module';
import { ComponentsModule } from './../components/components.module';
import { ItemformComponent } from './pages/item/itemform.component';
import { ItemsComponent } from './pages/item/items.component';
import { EdititemComponent } from './pages/item/edititem.component';
import { NewitemComponent } from './pages/item/newitem.component';
import { UserComponent } from './pages/users/user.component';
@NgModule({
  declarations: [
    DashboardComponent,
    AdmindashboardComponent,
    SidebarComponent,
    PurchaseComponent,
    PurchaseformComponent,
    NewpurchaseComponent,
    EditpurchaseComponent,
    SizesComponent,
    SizeformComponent,
    NewsizeComponent,
    EditsizeComponent,
    BrandsComponent,
    BrandformComponent,
    EditbrandComponent,
    NewbrandComponent,
    StaffComponent,
    StaffformComponent,
    NewstaffComponent,
    EditstaffComponent,
    ItemformComponent,
    ItemsComponent,
    EdititemComponent,
    NewitemComponent,
    UserComponent,
  ],
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
    MaterialExampleModule,
    ComponentsModule,
  ],
})
export class AdminModule {}
