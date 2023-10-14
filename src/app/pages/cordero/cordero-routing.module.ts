import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorderoPage } from './cordero.page';

const routes: Routes = [
  {
    path: '',
    component: CorderoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorderoPageRoutingModule {}
