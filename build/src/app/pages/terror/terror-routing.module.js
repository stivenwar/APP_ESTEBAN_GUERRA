import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TerrorPage } from './terror.page';
const routes = [
    {
        path: '',
        component: TerrorPage
    }
];
let TerrorPageRoutingModule = class TerrorPageRoutingModule {
};
TerrorPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], TerrorPageRoutingModule);
export { TerrorPageRoutingModule };
//# sourceMappingURL=terror-routing.module.js.map