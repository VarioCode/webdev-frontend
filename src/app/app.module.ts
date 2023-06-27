import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './modules/app-routing.module';
import { ComponentsModule } from './modules/components.module';
import { PagesModule } from './modules/pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterOutlet, AppRoutingModule, ComponentsModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
