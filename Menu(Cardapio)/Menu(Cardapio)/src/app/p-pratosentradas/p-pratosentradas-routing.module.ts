import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PPratosentradasPage } from './p-pratosentradas.page';

const routes: Routes = [
  {
    path: '',
    component: PPratosentradasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PPratosentradasPageRoutingModule {}
