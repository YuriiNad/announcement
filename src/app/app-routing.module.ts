import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: 'create', pathMatch: 'full' },
	{ path: 'create', loadChildren: () => import('./pages/generate/generate.module').then(m => m.GenerateModule) },
	{ path: 'all-jokes', loadChildren: () => import('./pages/all-jokes/all-jokes.module').then(m => m.AllJokesModule) },
	{ path: '**', component: NotFoundComponent },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
