import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutodescdiaPageRoutingModule } from './produtodescdia-routing.module';

import { ProdutodescdiaPage } from './produtodescdia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutodescdiaPageRoutingModule
  ],
  declarations: [ProdutodescdiaPage]
})
export class ProdutodescdiaPageModule {}
