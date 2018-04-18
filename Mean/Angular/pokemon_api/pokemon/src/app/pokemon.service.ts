import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokemonService {

  constructor(private _http: HttpClient) {
    console.log("Let's do this!");
    this.getAlakazam();      
  }

  abilities = [];
  shareAbilities = [];

  getAlakazam(){
    let alakazam = this._http.get('https://pokeapi.co/api/v2/pokemon/65');
    alakazam.subscribe(data => {return(data)});  
    alakazam.subscribe(data => {console.log('Got pokemon',data)  
      for(var able of data['abilities']){
        this.abilities.push(able['ability']['name']);
      }
      console.log(`Alakazam's abilities are ${this.abilities[0]}, ${this.abilities[1]} and ${this.abilities[2]}`);
      console.log("Abilities Array",this.abilities);
      this.getOtherPokemon();
      return data;
    })
  }
  getOtherPokemon(){
    for( var i = 1; i <= 151; i++){
      if(i == 65){
        continue;
      }
      const pokemon = this._http.get(`https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/${i}`);
      pokemon.subscribe(data => {
        for(var able of data['abilities']){
          if(this.abilities.indexOf(able['ability']['name']) >= 0){
            this.shareAbilities.push(data);
            console.log("These pokemon share Alakazam's abilities:",this.shareAbilities);
            return data;
          }
        }
      })
    }
  }
}