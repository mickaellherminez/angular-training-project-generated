import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'characters', loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule)},
  { path: 'seasons', loadChildren: () => import('./seasons/seasons.module').then(m => m.SeasonsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
