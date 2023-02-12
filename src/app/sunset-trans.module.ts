import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppHeaderComponent } from './shared/components/app-header/app-header.component';
import { SunsetTransRoutingModule } from './sunset-trans-routing.module';
import { SunsetTransComponent } from './sunset-trans.component';

@NgModule({
  declarations: [
    SunsetTransComponent,
    LandingPageComponent,
    AppHeaderComponent,
  ],
  imports: [
    BrowserModule,
    SunsetTransRoutingModule,
  ],
  providers: [],
  bootstrap: [SunsetTransComponent]
})
export class SunsetTransModule { }
