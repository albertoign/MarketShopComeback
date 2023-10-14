import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaranjaPage } from './naranja.page';

const routes: Routes = [
  {
    path: '',
    component: NaranjaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NaranjaPageRoutingModule {}
