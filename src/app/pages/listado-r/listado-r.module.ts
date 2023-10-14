import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoRPageRoutingModule } from './listado-r-routing.module';

import { ListadoRPage } from './listado-r.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoRPageRoutingModule
  ],
  declarations: [ListadoRPage]
})
export class ListadoRPageModule {}
