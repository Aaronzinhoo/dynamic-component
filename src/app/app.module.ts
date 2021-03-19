import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

import {AppComponent} from './app.component';
import {ViewDirectiveDirective} from './view-directive.directive';
import {ContainerComponent} from './container/container.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UclaRocksComponent} from './ucla-rocks/ucla-rocks.component';
import {SupriseComponent} from './suprise/suprise.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    ViewDirectiveDirective,
    ContainerComponent,
    UclaRocksComponent,
    SupriseComponent,
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
