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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
