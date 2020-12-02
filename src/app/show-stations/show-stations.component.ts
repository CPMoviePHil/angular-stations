import { Component, OnInit } from '@angular/core';
import { StationsService } from '../stations.service';

@Component({
  selector: 'app-show-stations',
  templateUrl: './show-stations.component.html',
  styleUrls: ['./show-stations.component.css']
})
export class ShowStationsComponent implements OnInit {
  stations;
  constructor(
    private station: StationsService,
  ) { }

  ngOnInit(): void {
    this.stations = this.station.getStations();
  }

}
