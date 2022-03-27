import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateRoutingModule } from './generate-routing.module';
import { GenerateComponent } from './generate.component';
import { CreateOwnComponent } from 'src/app/pages/generate/component/create-own/create-own';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreviewJokeComponent } from 'src/app/components/preview-joke/preview-joke';
import { CreateRandomComponent } from './component/create-random/create-random';

const components = [
  CreateOwnComponent,
  CreateRandomComponent,
  PreviewJokeComponent,
];

@NgModule({
  declarations: [
    GenerateComponent,
    ...components,

  ],
  imports: [
    CommonModule,
    GenerateRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ...components
  ]
})
export class GenerateModule { }
