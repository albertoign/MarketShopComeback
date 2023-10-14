import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoPPageRoutingModule } from './listado-p-routing.module';

import { ListadoPPage } from './listado-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoPPageRoutingModule
  ],
  declarations: [ListadoPPage]
})
export class ListadoPPageModule {}
