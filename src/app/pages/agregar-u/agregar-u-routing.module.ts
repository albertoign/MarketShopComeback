import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarUPage } from './agregar-u.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarUPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarUPageRoutingModule {}
