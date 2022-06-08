import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutodescPageRoutingModule } from './produtodesc-routing.module';

import { ProdutodescPage } from './produtodesc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutodescPageRoutingModule
  ],
  declarations: [ProdutodescPage]
})
export class ProdutodescPageModule {}
