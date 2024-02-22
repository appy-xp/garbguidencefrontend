import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authen/login',
    pathMatch: 'full',
  },
  {
    path: 'authen',
    loadChildren: () =>
      import('./authentication/authen.module').then((x) => x.AuthenModule),
  },
  {
    path: 'adm',
    loadChildren: () =>
      import('./admin/admin.module').then((x) => x.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
