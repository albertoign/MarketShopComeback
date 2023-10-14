import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BueyPage } from './buey.page';

const routes: Routes = [
  {
    path: '',
    component: BueyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BueyPageRoutingModule {}
