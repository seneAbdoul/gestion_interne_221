import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SousClasseRoutingModule } from './sous-classe-routing.module';
import { SousClasseComponent } from './sous-classe.component';
import { ClassesModule } from '../../classes.module';


@NgModule({
  declarations: [
    SousClasseComponent
  ],
  imports: [
    CommonModule,
    SousClasseRoutingModule,
    ClassesModule
  ]
})
export class SousClasseModule { }
