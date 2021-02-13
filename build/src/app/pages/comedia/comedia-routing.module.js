import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComediaPage } from './comedia.page';
const routes = [
    {
        path: '',
        component: ComediaPage
    }
];
let ComediaPageRoutingModule = class ComediaPageRoutingModule {
};
ComediaPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ComediaPageRoutingModule);
export { ComediaPageRoutingModule };
//# sourceMappingURL=comedia-routing.module.js.map