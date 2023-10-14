import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaltaPageRoutingModule } from './palta-routing.module';

import { PaltaPage } from './palta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaltaPageRoutingModule
  ],
  declarations: [PaltaPage]
})
export class PaltaPageModule {}
