

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
	{
		
		
		path: 'home',
		pathMatch: 'full',
		component: HomeComponent
	},
	{ 
		path: '',
		pathMatch: 'full',
		component: HomeComponent },

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: []
})
export class HomeRoutingModule { }
