import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SandiaPage } from './sandia.page';

const routes: Routes = [
  {
    path: '',
    component: SandiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SandiaPageRoutingModule {}
