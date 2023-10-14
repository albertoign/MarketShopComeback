import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoPPage } from './tipo-p.page';

const routes: Routes = [
  {
    path: '',
    component: TipoPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoPPageRoutingModule {}
