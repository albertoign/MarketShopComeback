import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrocoliPageRoutingModule } from './brocoli-routing.module';

import { BrocoliPage } from './brocoli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrocoliPageRoutingModule
  ],
  declarations: [BrocoliPage]
})
export class BrocoliPageModule {}
