import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit(){}
  routeChicago(){
    this._router.navigateByUrl('/chicago')
  }
  routeDC(){
    this._router.navigateByUrl('/dc')
  }
  routeSanJose(){
    this._router.navigateByUrl('/sanjose')
  }
  routeDallas(){
    this._router.navigateByUrl('/dallas')
  }
  routeBurbank(){
    this._router.navigateByUrl('/burbank')
  }
  routeSeattle(){
    this._router.navigateByUrl('/seattle')
  }
}
