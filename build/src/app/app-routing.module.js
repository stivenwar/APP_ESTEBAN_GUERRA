import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    {
        path: '',
        redirectTo: 'principal',
        pathMatch: 'full'
    },
    {
        path: 'principal',
        loadChildren: () => import('./pages/principal/principal.module').then(m => m.PrincipalPageModule)
    },
    {
        path: 'terror',
        loadChildren: () => import('./pages/terror/terror.module').then(m => m.TerrorPageModule)
    },
    {
        path: 'comedia',
        loadChildren: () => import('./pages/comedia/comedia.module').then(m => m.ComediaPageModule)
    },
    {
        path: 'accion',
        loadChildren: () => import('./pages/accion/accion.module').then(m => m.AccionPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map