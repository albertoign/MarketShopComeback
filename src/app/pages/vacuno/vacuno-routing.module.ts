import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacunoPage } from './vacuno.page';

const routes: Routes = [
  {
    path: '',
    component: VacunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacunoPageRoutingModule {}
