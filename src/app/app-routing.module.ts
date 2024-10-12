import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'ressources', loadChildren: () => import('./secure/ressources/ressources.module').then(m => m.RessourcesModule) },
  
{ path: 'inscriptionReinscriptions', loadChildren: () => import('./secure/inscription-reinscriptions/inscription-reinscriptions.module').then(m => m.InscriptionReinscriptionsModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
