import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorderoPageRoutingModule } from './cordero-routing.module';

import { CorderoPage } from './cordero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorderoPageRoutingModule
  ],
  declarations: [CorderoPage]
})
export class CorderoPageModule {}
