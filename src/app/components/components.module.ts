import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeadComponent} from './head/head.component';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [
      HeadComponent
  ],
  exports: [
    HeadComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
