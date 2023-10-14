import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CerdoPageRoutingModule } from './cerdo-routing.module';

import { CerdoPage } from './cerdo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CerdoPageRoutingModule
  ],
  declarations: [CerdoPage]
})
export class CerdoPageModule {}
