import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilusarioPage } from './perfilusario.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilusarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilusarioPageRoutingModule {}
