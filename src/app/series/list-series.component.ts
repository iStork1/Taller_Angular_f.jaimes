import { Component, OnInit } from '@angular/core';
import { SeriesService } from './series.service';
import { Serie } from './serie';

@Component({
  selector: 'app-series-list',
  templateUrl: './list-series.component.html'
})
export class ListSeriesComponent implements OnInit {

  series: Serie[] = [];

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe(data => {
      this.series = data;
    });
  }
}
