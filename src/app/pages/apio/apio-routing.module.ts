import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApioPage } from './apio.page';

const routes: Routes = [
  {
    path: '',
    component: ApioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApioPageRoutingModule {}
