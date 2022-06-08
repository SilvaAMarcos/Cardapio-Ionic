import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PBebidasPageRoutingModule } from './p-bebidas-routing.module';

import { PBebidasPage } from './p-bebidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PBebidasPageRoutingModule
  ],
  declarations: [PBebidasPage]
})
export class PBebidasPageModule {}
