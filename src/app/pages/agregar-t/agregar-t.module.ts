import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarTPageRoutingModule } from './agregar-t-routing.module';

import { AgregarTPage } from './agregar-t.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarTPageRoutingModule
  ],
  declarations: [AgregarTPage]
})
export class AgregarTPageModule {}
