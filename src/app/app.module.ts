import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes,RouterModule } from '@angular/router';   
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { DeveloperComponent } from './developer/developer.component';
import { appRoutingModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';


import { HomeModule } from './home/home.module';
import { FooterModule } from './footer/footer.module';
import { DeveloperModule } from './developer/developer.module';
import { AboutModule } from './about/about.module';
@NgModule({
  declarations: [
    AppComponent,   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HomeModule,
    DeveloperModule,
    AboutModule,
    FooterModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
