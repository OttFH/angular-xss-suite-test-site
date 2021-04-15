import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SafeHtmlPipe} from './safeHtml.pipe';

@NgModule({
  declarations: [
    SafeHtmlPipe,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SafeHtmlPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
