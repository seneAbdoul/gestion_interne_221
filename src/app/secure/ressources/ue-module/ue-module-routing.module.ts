import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UeModuleComponent } from './ue-module.component';

const routes: Routes = [{ path: '', component: UeModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UeModuleRoutingModule { }
