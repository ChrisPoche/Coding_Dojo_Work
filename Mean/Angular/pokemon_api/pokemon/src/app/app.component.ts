import { Component, OnChanges ,OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'the Angular Pokemon API caller...';
  constructor(private _pokemonService : PokemonService){}
  }
