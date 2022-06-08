import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PPratosentradasPageRoutingModule } from './p-pratosentradas-routing.module';

import { PPratosentradasPage } from './p-pratosentradas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PPratosentradasPageRoutingModule
  ],
  declarations: [PPratosentradasPage]
})
export class PPratosentradasPageModule {}
