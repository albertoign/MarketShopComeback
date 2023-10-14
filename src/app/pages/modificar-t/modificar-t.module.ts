import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarTPageRoutingModule } from './modificar-t-routing.module';

import { ModificarTPage } from './modificar-t.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarTPageRoutingModule
  ],
  declarations: [ModificarTPage]
})
export class ModificarTPageModule {}
