import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarRPage } from './modificar-r.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarRPageRoutingModule {}
