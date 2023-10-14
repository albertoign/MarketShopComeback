import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalmonPage } from './salmon.page';

const routes: Routes = [
  {
    path: '',
    component: SalmonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalmonPageRoutingModule {}
