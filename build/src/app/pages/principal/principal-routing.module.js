import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrincipalPage } from './principal.page';
const routes = [
    {
        path: '',
        component: PrincipalPage
    }
];
let PrincipalPageRoutingModule = class PrincipalPageRoutingModule {
};
PrincipalPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PrincipalPageRoutingModule);
export { PrincipalPageRoutingModule };
//# sourceMappingURL=principal-routing.module.js.map