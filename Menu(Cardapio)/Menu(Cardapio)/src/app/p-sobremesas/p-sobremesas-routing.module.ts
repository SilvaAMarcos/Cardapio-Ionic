import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PSobremesasPage } from './p-sobremesas.page';

const routes: Routes = [
  {
    path: '',
    component: PSobremesasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PSobremesasPageRoutingModule {}
