import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionReinscriptionsComponent } from './inscription-reinscriptions.component';

const routes: Routes = [
  { path: '', component: InscriptionReinscriptionsComponent }, 
  { path: 'listeEtudiants', loadChildren: () => import('./components/liste-etudiants/liste-etudiants.module').then(m => m.ListeEtudiantsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscriptionReinscriptionsRoutingModule { }
