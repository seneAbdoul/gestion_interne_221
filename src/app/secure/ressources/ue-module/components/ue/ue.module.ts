import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UeRoutingModule } from './ue-routing.module';
import { UeComponent } from './ue.component';
import { UeModuleModule } from '../../ue-module.module';


@NgModule({
  declarations: [
    UeComponent
  ],
  imports: [
    CommonModule,
    UeRoutingModule,
    UeModuleModule
  ]
})
export class UeModule { }
