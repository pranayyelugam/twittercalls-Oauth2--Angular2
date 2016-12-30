import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { developerRoutingModule } from './developer-routing.module';
import { DeveloperComponent } from './developer.component';

import { FooterModule } from '../footer/footer.module';

@NgModule({
	imports: [
		CommonModule,

		developerRoutingModule,
		FooterModule
	],
	declarations: [
		DeveloperComponent
	]
})
export class DeveloperModule { }
