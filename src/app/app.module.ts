import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SeriesModule } from './series/series.module';
import { ListSeriesComponent } from './series/list-series.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SeriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
