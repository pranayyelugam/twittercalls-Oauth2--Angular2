import {Routes, RouterModule} from '@angular/router';
import {NgModule} from  '@angular/core';
import {AboutComponent} from './about/about.component';
import {DeveloperComponent} from './developer/developer.component';


 const routes: Routes = [
	{ path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
	{ path: 'developer', component: DeveloperComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: []
})
export class appRoutingModule { }

export const routingComponents =[AboutComponent, DeveloperComponent ];