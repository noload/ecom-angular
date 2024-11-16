import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForPropertiesComponent } from './for-properties/for-properties.component';
import { ForTrackComponent } from './for-track/for-track.component';

@NgModule({
  declarations: [
    AppComponent,
    ForPropertiesComponent,
    ForTrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
