import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarTPage } from './modificar-t.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarTPageRoutingModule {}
