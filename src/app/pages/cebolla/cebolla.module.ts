import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CebollaPageRoutingModule } from './cebolla-routing.module';

import { CebollaPage } from './cebolla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CebollaPageRoutingModule
  ],
  declarations: [CebollaPage]
})
export class CebollaPageModule {}
