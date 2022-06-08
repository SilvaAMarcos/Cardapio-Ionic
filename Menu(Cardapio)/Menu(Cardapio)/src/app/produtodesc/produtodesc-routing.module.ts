import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutodescPage } from './produtodesc.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutodescPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutodescPageRoutingModule {}
