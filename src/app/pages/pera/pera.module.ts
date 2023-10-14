import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeraPageRoutingModule } from './pera-routing.module';

import { PeraPage } from './pera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeraPageRoutingModule
  ],
  declarations: [PeraPage]
})
export class PeraPageModule {}
