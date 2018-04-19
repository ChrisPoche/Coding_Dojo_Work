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
  tasks: any;
  search: any;
  task_search: object[];
  rand_task: any;

  ngOnInit(){
    this.title = 'Restful Tasks API';
  }
  onButtonClick(): void {
    this.rand_task = null;
    this.task_search = null;
    this.getTasksFromService();
  }
  onButtonClickRand(): void {
    this.tasks = null;
    this.task_search = null;
    this._httpService.getTasks().subscribe(data => {
      let num = Math.floor(Math.random()*3);
      this.rand_task = data[num];
      console.log(num);
      console.log(this.rand_task);
    })
  }
  onKeyup(event : any): void {
    this.tasks = null;
    this.rand_task = null;
    this.search = event.target.value;
    //console.log(this.search);
    if(this.search == ""){
      this.task_search = [];
    }
    else{
      this._httpService.getTasks().subscribe(data => {
        this.task_search = [];
        for(var task in data){
          //console.log(data[task]);
          for(var i in data[task]['keyword']){
            if(data[task]['keyword'][i].includes(this.search)){
              console.log('TASK SEARCH RESULT',data[task]);
              console.log('TASK SEARCH',this.task_search);
              this.task_search.push(data[task]);
              break;
            }
          }
        }
      })
    }
  }
  getTasksFromService(){
      let taskObservable = this._httpService.getTasks();
      taskObservable.subscribe(data => {console.log('Got the tasks',data)
      this.tasks = data;
    });
  }
}
