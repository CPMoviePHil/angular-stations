import { Injectable } from '@angular/core';
import { stations } from '../assets/stations';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StationsService {
  temp;
  constructor(
    private http: HttpClient,
  ) { }
  getStations(){
    // this.temp = this.http.get('../../stations.json');
    return stations;
  }
}
