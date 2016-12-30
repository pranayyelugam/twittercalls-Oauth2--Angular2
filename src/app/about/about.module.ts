import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

import { FooterModule } from '../footer/footer.module';

@NgModule({
	imports: [
		CommonModule,

		AboutRoutingModule,
		FooterModule
	],
	declarations: [
		AboutComponent
	]
})
export class AboutModule { }
