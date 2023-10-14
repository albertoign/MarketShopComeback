import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeraPage } from './pera.page';

const routes: Routes = [
  {
    path: '',
    component: PeraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeraPageRoutingModule {}
