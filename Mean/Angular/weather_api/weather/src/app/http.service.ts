import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http : HttpClient) { }

  getWeather(city){
    var apiKey = "&appid=a3fa8157650d6ad9a4a1abb22e68e4bb"
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}${apiKey}`);
  }
}
