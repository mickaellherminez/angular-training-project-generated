import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeasonsRoutingModule } from './seasons-routing.module';
import { SeasonsListComponent } from './seasons-list/seasons-list.component';
import { SeasonsDetailsComponent } from './seasons-details/seasons-details.component';


@NgModule({
  declarations: [
    SeasonsListComponent,
    SeasonsDetailsComponent
  ],
  imports: [
    CommonModule,
    SeasonsRoutingModule
  ]
})
export class SeasonsModule { }
