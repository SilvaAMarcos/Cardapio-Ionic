import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PDiaPageRoutingModule } from './p-dia-routing.module';

import { PDiaPage } from './p-dia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PDiaPageRoutingModule
  ],
  declarations: [PDiaPage]
})
export class PDiaPageModule {}
