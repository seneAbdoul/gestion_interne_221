import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeEtudiantsComponent } from './liste-etudiants.component';

const routes: Routes = [{ path: '', component: ListeEtudiantsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeEtudiantsRoutingModule { }
