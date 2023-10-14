import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PepinoPage } from './pepino.page';

const routes: Routes = [
  {
    path: '',
    component: PepinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PepinoPageRoutingModule {}
