import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilusarioPageRoutingModule } from './perfilusario-routing.module';

import { PerfilusarioPage } from './perfilusario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilusarioPageRoutingModule
  ],
  declarations: [PerfilusarioPage]
})
export class PerfilusarioPageModule {}
