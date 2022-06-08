import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PPratosPageRoutingModule } from './p-pratos-routing.module';

import { PPratosPage } from './p-pratos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PPratosPageRoutingModule
  ],
  declarations: [PPratosPage]
})
export class PPratosPageModule {}
