import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerrorPageRoutingModule } from './terror-routing.module';

import { TerrorPage } from './terror.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TerrorPageRoutingModule,
        ComponentsModule
    ],
  declarations: [TerrorPage]
})
export class TerrorPageModule {}
