import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'p-lanches',
    loadChildren: () => import('./p-lanches/p-lanches.module').then( m => m.PLanchesPageModule)
  },
  {
    path: 'p-pratos',
    loadChildren: () => import('./p-pratos/p-pratos.module').then( m => m.PPratosPageModule)
  },
  {
    path: 'p-sobremesas',
    loadChildren: () => import('./p-sobremesas/p-sobremesas.module').then( m => m.PSobremesasPageModule)
  },
  {
    path: 'p-bebidas',
    loadChildren: () => import('./p-bebidas/p-bebidas.module').then( m => m.PBebidasPageModule)
  },
  {
    path: 'p-pratosentradas',
    loadChildren: () => import('./p-pratosentradas/p-pratosentradas.module').then( m => m.PPratosentradasPageModule)
  },
  {
    path: 'p-dia',
    loadChildren: () => import('./p-dia/p-dia.module').then( m => m.PDiaPageModule)
  },
  {
    path: 'produtodesc',
    loadChildren: () => import('./produtodesc/produtodesc.module').then( m => m.ProdutodescPageModule)
  },
  {
    path: 'produtodescdia',
    loadChildren: () => import('./produtodescdia/produtodescdia.module').then( m => m.ProdutodescdiaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
