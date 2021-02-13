import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccionPageRoutingModule } from './accion-routing.module';
import { AccionPage } from './accion.page';
import { ComponentsModule } from '../../components/components.module';
let AccionPageModule = class AccionPageModule {
};
AccionPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            AccionPageRoutingModule,
            ComponentsModule
        ],
        declarations: [AccionPage]
    })
], AccionPageModule);
export { AccionPageModule };
//# sourceMappingURL=accion.module.js.map