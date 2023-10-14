import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PepinoPageRoutingModule } from './pepino-routing.module';

import { PepinoPage } from './pepino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PepinoPageRoutingModule
  ],
  declarations: [PepinoPage]
})
export class PepinoPageModule {}
