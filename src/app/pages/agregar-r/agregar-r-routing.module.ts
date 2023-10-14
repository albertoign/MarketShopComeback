import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarRPage } from './agregar-r.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarRPageRoutingModule {}
