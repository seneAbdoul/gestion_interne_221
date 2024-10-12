import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeEtudiantsRoutingModule } from './liste-etudiants-routing.module';
import { ListeEtudiantsComponent } from './liste-etudiants.component';


@NgModule({
  declarations: [
    ListeEtudiantsComponent
  ],
  imports: [
    CommonModule,
    ListeEtudiantsRoutingModule
  ]
})
export class ListeEtudiantsModule { }
