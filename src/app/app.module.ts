import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RightComponent } from './components/right/right.component';
import { LeftComponent } from './components/left/left.component';
import { MiddleComponent } from './components/middle/middle.component';

@NgModule({
  declarations: [
    AppComponent,
    RightComponent,
    LeftComponent,
    MiddleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
