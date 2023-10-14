import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoPage } from './producto.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoPage
  },
  {
    path: ':id',
    loadChildren: () => import('./detalle-producto/detalle-producto.module').then( m => m.DetalleProductoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoPageRoutingModule {}
