import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanPage } from './pan.page';

const routes: Routes = [
  {
    path: '',
    component: PanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanPageRoutingModule {}
