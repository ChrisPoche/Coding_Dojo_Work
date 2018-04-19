import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http : HttpClient) {
    this.getTasks();
  }
  getTasks(){
    return this._http.get('/tasks');
  }
  addTask(newTask){
    return this._http.post('/',newTask);
  }
  editTask(editTask){
    return this._http.put(`/${editTask.id}`,editTask);
  }
  deleteTask(taskID){
    console.log("TASK ID",taskID);
    return this._http.delete(`/${taskID}`);
  }
}
