import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoUPageRoutingModule } from './listado-u-routing.module';

import { ListadoUPage } from './listado-u.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoUPageRoutingModule
  ],
  declarations: [ListadoUPage]
})
export class ListadoUPageModule {}
