import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarRPageRoutingModule } from './agregar-r-routing.module';

import { AgregarRPage } from './agregar-r.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarRPageRoutingModule
  ],
  declarations: [AgregarRPage]
})
export class AgregarRPageModule {}
