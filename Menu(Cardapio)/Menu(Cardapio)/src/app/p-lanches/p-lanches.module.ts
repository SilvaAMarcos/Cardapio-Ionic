import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PLanchesPageRoutingModule } from './p-lanches-routing.module';

import { PLanchesPage } from './p-lanches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PLanchesPageRoutingModule
  ],
  declarations: [PLanchesPage]
})
export class PLanchesPageModule {}
