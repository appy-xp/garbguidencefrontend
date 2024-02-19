import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard.component';
import { AdmindashboardComponent } from './pages/admindashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AdmindashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
