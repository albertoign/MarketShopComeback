import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SandiaPageRoutingModule } from './sandia-routing.module';

import { SandiaPage } from './sandia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SandiaPageRoutingModule
  ],
  declarations: [SandiaPage]
})
export class SandiaPageModule {}
