import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoRPage } from './listado-r.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoRPageRoutingModule {}
