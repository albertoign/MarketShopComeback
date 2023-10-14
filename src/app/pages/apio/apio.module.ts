import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApioPageRoutingModule } from './apio-routing.module';

import { ApioPage } from './apio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApioPageRoutingModule
  ],
  declarations: [ApioPage]
})
export class ApioPageModule {}
