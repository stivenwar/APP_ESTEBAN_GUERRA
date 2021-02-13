import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComediaPageRoutingModule } from './comedia-routing.module';
import { ComediaPage } from './comedia.page';
import { ComponentsModule } from '../../components/components.module';
let ComediaPageModule = class ComediaPageModule {
};
ComediaPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ComediaPageRoutingModule,
            ComponentsModule
        ],
        declarations: [ComediaPage]
    })
], ComediaPageModule);
export { ComediaPageModule };
//# sourceMappingURL=comedia.module.js.map