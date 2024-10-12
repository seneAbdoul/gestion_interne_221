import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeUeRoutingModule } from './type-ue-routing.module';
import { TypeUeComponent } from './type-ue.component';
import { UeModuleModule } from '../../ue-module.module';


@NgModule({
  declarations: [
    TypeUeComponent
  ],
  imports: [
    CommonModule,
    TypeUeRoutingModule,
    UeModuleModule
  ]
})
export class TypeUeModule { }
