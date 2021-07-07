import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { GoToCharactersGuard } from 'src/app/services/go-to-characters.guard';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailsComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [ GoToCharactersGuard ]
})
export class CharactersModule { }
