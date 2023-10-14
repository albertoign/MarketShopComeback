import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagina1PageRoutingModule } from './pagina1-routing.module';

import { Pagina1Page } from './pagina1.page';
import { Componente1Component } from 'src/app/components/componente1/componente1.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina1PageRoutingModule
  ],
  declarations: [Pagina1Page,Componente1Component]
})
export class Pagina1PageModule {}
