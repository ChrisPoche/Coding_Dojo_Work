import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http : HttpClient) {
    this.getTasks();
  }
  getTasks(){
    let allTasksObservable = this._http.get('/tasks');
    allTasksObservable.subscribe(data => console.log('Got our tasks!',data));
    let taskObservable = this._http.get('/5ad6a3773d3fd536427ef110');
    taskObservable.subscribe(data => console.log("Don't forget to clean the counters!",data));
  }
}
