import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeasonsListComponent } from './seasons-list/seasons-list.component';

const routes: Routes = [
  { path: '', component: SeasonsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeasonsRoutingModule { }
