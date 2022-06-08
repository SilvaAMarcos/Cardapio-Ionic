import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PPratosPage } from './p-pratos.page';

const routes: Routes = [
  {
    path: '',
    component: PPratosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PPratosPageRoutingModule {}
