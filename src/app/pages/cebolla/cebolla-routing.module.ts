import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CebollaPage } from './cebolla.page';

const routes: Routes = [
  {
    path: '',
    component: CebollaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CebollaPageRoutingModule {}
