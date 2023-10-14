import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarUPageRoutingModule } from './agregar-u-routing.module';

import { AgregarUPage } from './agregar-u.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarUPageRoutingModule
  ],
  declarations: [AgregarUPage]
})
export class AgregarUPageModule {}
