import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { FooterModule } from '../footer/footer.module';

@NgModule({
	imports: [
		CommonModule,

		HomeRoutingModule,
		FooterModule,
        BrowserModule,
    FormsModule,
    HttpModule,
	],
	declarations: [
		HomeComponent
	]
})
export class HomeModule { }
