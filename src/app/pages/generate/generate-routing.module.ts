import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOwnComponent } from './component/create-own/create-own';
import { CreateRandomComponent } from './component/create-random/create-random';
import { GenerateComponent } from './generate.component';

const routes: Routes = [
  { path: '', component: GenerateComponent },
  { path:'create-own', component: CreateOwnComponent},
  { path:'create-random', component: CreateRandomComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateRoutingModule { }
