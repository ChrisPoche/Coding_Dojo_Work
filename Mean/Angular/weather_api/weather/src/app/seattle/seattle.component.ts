import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  constructor(private _httpService: HttpService){}
  city = 'seattle';
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  condition: any;
  img: any;

  ngOnInit(){
    let weatherObservable = this._httpService.getWeather(this.city);
    weatherObservable.subscribe(data => {
      console.log("JSON DATA RECEIVED",data);
      this.condition = data['weather'][0]['main'];
      this.humidity = data['main']['humidity'];
      this.temp = this.convertToF(data['main']['temp']);
      this.temp_min = this.convertToF(data['main']['temp_min']);
      this.temp_max = this.convertToF(data['main']['temp_max']);
      this.img = `http://openweathermap.org/img/w/${data['weather'][0]['icon']}.png`;
    })
  };
  convertToF(temp){
    return Math.floor(((9/5)*(temp-273))+32);
  }
}