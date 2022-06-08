import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PBebidasPage } from './p-bebidas.page';

const routes: Routes = [
  {
    path: '',
    component: PBebidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PBebidasPageRoutingModule {}
