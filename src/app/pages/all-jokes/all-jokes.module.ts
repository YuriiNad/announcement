import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllJokesRoutingModule } from './all-jokes-routing.module';
import { AllJokesComponent } from './all-jokes.component';
import { JokeComponent } from 'src/app/components/joke/joke.component';


@NgModule({
  declarations: [
    AllJokesComponent,
    JokeComponent,
  ],
  imports: [
    CommonModule,
    AllJokesRoutingModule,
  ]
})
export class AllJokesModule { }
