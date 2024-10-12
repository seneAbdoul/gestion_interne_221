import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemestreRoutingModule } from './semestre-routing.module';
import { SemestreComponent } from './semestre.component';
import { DomaineSpecialiteModule } from '../../domaine-specialite.module';


@NgModule({
  declarations: [
    SemestreComponent
  ],
  imports: [
    CommonModule,
    SemestreRoutingModule,
    DomaineSpecialiteModule
  ]
})
export class SemestreModule { }
