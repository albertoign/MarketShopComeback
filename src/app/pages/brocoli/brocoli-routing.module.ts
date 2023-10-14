import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrocoliPage } from './brocoli.page';

const routes: Routes = [
  {
    path: '',
    component: BrocoliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrocoliPageRoutingModule {}
