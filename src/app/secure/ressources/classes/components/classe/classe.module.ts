import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasseRoutingModule } from './classe-routing.module';
import { ClasseComponent } from './classe.component';
import { ClassesModule } from '../../classes.module';


@NgModule({
  declarations: [
    ClasseComponent
  ],
  imports: [
    CommonModule,
    ClasseRoutingModule,
    ClassesModule
  ]
})
export class ClasseModule { }
