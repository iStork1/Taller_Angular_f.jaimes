import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SeriesService } from './series.service';
import { ListSeriesComponent } from './list-series.component';

@NgModule({
  declarations: [
    ListSeriesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SeriesService
  ]
})
export class SeriesModule { }
