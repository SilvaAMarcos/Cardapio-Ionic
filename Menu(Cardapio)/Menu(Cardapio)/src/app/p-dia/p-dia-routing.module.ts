import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PDiaPage } from './p-dia.page';

const routes: Routes = [
  {
    path: '',
    component: PDiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PDiaPageRoutingModule {}
