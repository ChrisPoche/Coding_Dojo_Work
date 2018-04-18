import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _httpService: HttpService){}
  title: string;
  tasks: object;

  ngOnInit(){
    this.title = 'Restful Tasks API';
    this.getTasksFromService();
  }
  getTasksFromService(){
      let taskObservable = this._httpService.getTasks();
      taskObservable.subscribe(data => {console.log('Got the tasks',data)
      this.tasks = data;
    });
  }
}
