import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarPPage } from './modificar-p.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarPPageRoutingModule {}
