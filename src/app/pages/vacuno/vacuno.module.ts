import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacunoPageRoutingModule } from './vacuno-routing.module';

import { VacunoPage } from './vacuno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VacunoPageRoutingModule
  ],
  declarations: [VacunoPage]
})
export class VacunoPageModule {}
