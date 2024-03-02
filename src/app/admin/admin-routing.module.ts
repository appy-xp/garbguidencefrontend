import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard.component';
import { AdmindashboardComponent } from './pages/admindashboard.component';
import { BrandsComponent } from './pages/brand/brands.component';
import { NewbrandComponent } from './pages/brand/newbrand.component';
import { EditbrandComponent } from './pages/brand/editbrand.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { NewpurchaseComponent } from './pages/purchase/newpurchase.component';
import { EditpurchaseComponent } from './pages/purchase/editpurchase.component';
import { SizesComponent } from './pages/size/sizes.component';
import { NewsizeComponent } from './pages/size/newsize.component';
import { EditsizeComponent } from './pages/size/editsize.component';
import { StaffComponent } from './pages/staffs/staff.component';
import { NewstaffComponent } from './pages/staffs/newstaff.component';
import { EditstaffComponent } from './pages/staffs/editstaff.component';
import { ItemsComponent } from './pages/item/items.component';
import { NewitemComponent } from './pages/item/newitem.component';
import { EdititemComponent } from './pages/item/edititem.component';
import { UserComponent } from './pages/users/user.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'mydash', component: AdmindashboardComponent },

      { path: 'brand', component: BrandsComponent },
      { path: 'brand/addnew', component: NewbrandComponent },
      { path: 'brand/edit/:id', component: EditbrandComponent },

      { path: 'purchase', component: PurchaseComponent },
      { path: 'purchase/addnew', component: NewpurchaseComponent },
      { path: 'purchase/edit/:id', component: EditpurchaseComponent },

      { path: 'size', component: SizesComponent },
      { path: 'size/addnew', component: NewsizeComponent },
      { path: 'size/edit/:id', component: EditsizeComponent },

      { path: 'staffs', component: StaffComponent },
      { path: 'staffs/addnew', component: NewstaffComponent },
      { path: 'staffs/edit/:id', component: EditstaffComponent },

      { path: 'items', component: ItemsComponent },
      { path: 'items/addnew', component: NewitemComponent },
      { path: 'items/edit/:id', component: EdititemComponent },

      { path: 'users', component: UserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
