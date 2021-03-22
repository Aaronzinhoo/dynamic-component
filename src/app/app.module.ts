import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContainerComponent} from './container/container.component';
import {ViewDirectiveDirective} from './view-directive.directive';
import {DefaultComponent} from './default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewDirectiveDirective,
    ContainerComponent,
    DefaultComponent,
  ],
  imports: [
    MatChipsModule,
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
