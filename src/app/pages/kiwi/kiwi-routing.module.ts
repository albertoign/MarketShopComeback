import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KiwiPage } from './kiwi.page';

const routes: Routes = [
  {
    path: '',
    component: KiwiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KiwiPageRoutingModule {}
