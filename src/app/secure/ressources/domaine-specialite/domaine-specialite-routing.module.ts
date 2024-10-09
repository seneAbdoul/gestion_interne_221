import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomaineSpecialiteComponent } from './domaine-specialite.component';

const routes: Routes = [{ path: '', component: DomaineSpecialiteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomaineSpecialiteRoutingModule { }
