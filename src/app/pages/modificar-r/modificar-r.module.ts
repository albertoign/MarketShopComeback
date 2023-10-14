import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarRPageRoutingModule } from './modificar-r-routing.module';

import { ModificarRPage } from './modificar-r.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarRPageRoutingModule
  ],
  declarations: [ModificarRPage]
})
export class ModificarRPageModule {}
