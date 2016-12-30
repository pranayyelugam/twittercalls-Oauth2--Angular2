import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeveloperComponent } from './developer.component';

const routes: Routes = [
	{
		path: 'developer',
		component: DeveloperComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: []
})
export class developerRoutingModule { }
