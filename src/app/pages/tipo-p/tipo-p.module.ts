import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoPPageRoutingModule } from './tipo-p-routing.module';

import { TipoPPage } from './tipo-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoPPageRoutingModule
  ],
  declarations: [TipoPPage]
})
export class TipoPPageModule {}
