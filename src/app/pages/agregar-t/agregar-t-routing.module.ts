import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarTPage } from './agregar-t.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarTPageRoutingModule {}
