import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BueyPageRoutingModule } from './buey-routing.module';

import { BueyPage } from './buey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BueyPageRoutingModule
  ],
  declarations: [BueyPage]
})
export class BueyPageModule {}
