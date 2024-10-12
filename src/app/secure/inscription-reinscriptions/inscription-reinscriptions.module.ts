import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionReinscriptionsRoutingModule } from './inscription-reinscriptions-routing.module';
import { InscriptionReinscriptionsComponent } from './inscription-reinscriptions.component';


@NgModule({
  declarations: [
    InscriptionReinscriptionsComponent
  ],
  imports: [
    CommonModule,
    InscriptionReinscriptionsRoutingModule
  ]
})
export class InscriptionReinscriptionsModule { }
