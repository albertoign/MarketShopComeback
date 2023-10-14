import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoUPage } from './listado-u.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoUPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoUPageRoutingModule {}
