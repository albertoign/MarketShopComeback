import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaranjaPageRoutingModule } from './naranja-routing.module';

import { NaranjaPage } from './naranja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaranjaPageRoutingModule
  ],
  declarations: [NaranjaPage]
})
export class NaranjaPageModule {}
