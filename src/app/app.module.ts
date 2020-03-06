import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as more from 'highcharts/highcharts-more.src';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as exporting from 'highcharts/modules/exporting.src';
import * as offlineExporting from 'highcharts/modules/offline-exporting.src';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting, offlineExporting ] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
