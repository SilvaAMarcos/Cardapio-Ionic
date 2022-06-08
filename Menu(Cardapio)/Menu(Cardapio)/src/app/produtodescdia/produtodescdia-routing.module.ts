import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutodescdiaPage } from './produtodescdia.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutodescdiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutodescdiaPageRoutingModule {}
