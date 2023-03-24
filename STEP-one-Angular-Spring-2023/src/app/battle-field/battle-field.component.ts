import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-battle-field',
  templateUrl: './battle-field.component.html',
  styleUrls: ['./battle-field.component.css']
})
export class BattleFieldComponent {
group: any;
  constructor(private apiService: ApiService) {}
    pokemonControl = new FormControl('')
    pokemons: any[] = []; 

    ngOnInit(): void {
        this.apiService.getPokemonList().subscribe(
            (list: any[]) => {
                this.pokemons = list;
            }
        )
    }

    

}

