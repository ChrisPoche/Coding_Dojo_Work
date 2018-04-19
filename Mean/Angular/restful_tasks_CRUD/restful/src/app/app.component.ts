import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _httpService: HttpService){}
  tasks: any;
  newTask: object;
  editTask: object;
  edit: boolean;
  new: boolean;

  ngOnInit(){
    this.new = true;
    this.newTask = {title: "", description: "", keyword: []};
    this.edit = false;
    this.getTasksFromService();
  }
  onSubmitCreate(): void {
    let createObservable = this._httpService.addTask(this.newTask);
    createObservable.subscribe(data => {
      console.log('Got data from post', data);
      this.newTask = {title: "", description: "", keyword: []};
      this.getTasksFromService();
    })
  }
  onButtonClickEdit(task): void {
    this.edit = true;
    this.new = false;
    this.editTask = {title: task.title, description: task.description, keyword: task.keyword, id: task._id};
  }
  onSubmitEdit(editTask): void {
    let editObservable = this._httpService.editTask(this.editTask);
    editObservable.subscribe(data => {
      console.log('Got data back from update',data);
    })
    this.getTasksFromService();
    this.new = true;
    this.edit = false;
  }
  onButtonClickDelete(task): void {
    console.log("Delete button was clicked");
    console.log("Task ID", task._id);
    let deleteObservable = this._httpService.deleteTask(task._id);
    deleteObservable.subscribe(data => {
      console.log('Delete was successful',data);
      this.getTasksFromService();
      console.log("Tasks are refreshed");
    })
  }
  getTasksFromService(){
      let taskObservable = this._httpService.getTasks();
      taskObservable.subscribe(data => {console.log('Got the tasks',data)
      this.tasks = data;
    });
  }
}
