import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CerdoPage } from './cerdo.page';

const routes: Routes = [
  {
    path: '',
    component: CerdoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CerdoPageRoutingModule {}
