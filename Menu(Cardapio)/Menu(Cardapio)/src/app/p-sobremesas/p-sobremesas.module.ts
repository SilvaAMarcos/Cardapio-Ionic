import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PSobremesasPageRoutingModule } from './p-sobremesas-routing.module';

import { PSobremesasPage } from './p-sobremesas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PSobremesasPageRoutingModule
  ],
  declarations: [PSobremesasPage]
})
export class PSobremesasPageModule {}
