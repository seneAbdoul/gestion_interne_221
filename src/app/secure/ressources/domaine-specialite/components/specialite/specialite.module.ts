import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialiteRoutingModule } from './specialite-routing.module';
import { SpecialiteComponent } from './specialite.component';
import { DomaineSpecialiteModule } from '../../domaine-specialite.module';


@NgModule({
  declarations: [
    SpecialiteComponent
  ],
  imports: [
    CommonModule,
    SpecialiteRoutingModule,
    DomaineSpecialiteModule
  ]
})
export class SpecialiteModule { }
