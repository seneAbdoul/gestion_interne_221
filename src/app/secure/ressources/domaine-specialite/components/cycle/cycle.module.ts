import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CycleRoutingModule } from './cycle-routing.module';
import { CycleComponent } from './cycle.component';
import { DomaineSpecialiteModule } from '../../domaine-specialite.module';


@NgModule({
  declarations: [
    CycleComponent
  ],
  imports: [
    CommonModule,
    CycleRoutingModule,
    DomaineSpecialiteModule
  ]
})
export class CycleModule { }
