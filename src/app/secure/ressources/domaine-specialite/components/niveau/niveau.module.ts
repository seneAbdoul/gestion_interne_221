import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NiveauRoutingModule } from './niveau-routing.module';
import { NiveauComponent } from './niveau.component';
import { DomaineSpecialiteModule } from '../../domaine-specialite.module';


@NgModule({
  declarations: [
    NiveauComponent
  ],
  imports: [
    CommonModule,
    NiveauRoutingModule,
    DomaineSpecialiteModule
  ]
})
export class NiveauModule { }
