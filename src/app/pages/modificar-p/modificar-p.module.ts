import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarPPageRoutingModule } from './modificar-p-routing.module';

import { ModificarPPage } from './modificar-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarPPageRoutingModule
  ],
  declarations: [ModificarPPage]
})
export class ModificarPPageModule {}
