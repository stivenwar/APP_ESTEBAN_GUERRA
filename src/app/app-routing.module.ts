import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'terror',
    loadChildren: () => import('./pages/terror/terror.module').then( m => m.TerrorPageModule)
  },
  {
    path: 'comedia',
    loadChildren: () => import('./pages/comedia/comedia.module').then( m => m.ComediaPageModule)
  },
  {
    path: 'accion',
    loadChildren: () => import('./pages/accion/accion.module').then( m => m.AccionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
