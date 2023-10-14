import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KiwiPageRoutingModule } from './kiwi-routing.module';

import { KiwiPage } from './kiwi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KiwiPageRoutingModule
  ],
  declarations: [KiwiPage]
})
export class KiwiPageModule {}
