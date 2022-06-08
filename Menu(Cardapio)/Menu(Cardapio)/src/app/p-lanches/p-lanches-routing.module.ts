import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PLanchesPage } from './p-lanches.page';

const routes: Routes = [
  {
    path: '',
    component: PLanchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PLanchesPageRoutingModule {}
