import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccionPage } from './accion.page';
const routes = [
    {
        path: '',
        component: AccionPage
    }
];
let AccionPageRoutingModule = class AccionPageRoutingModule {
};
AccionPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AccionPageRoutingModule);
export { AccionPageRoutingModule };
//# sourceMappingURL=accion-routing.module.js.map