import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-pokemon-details',
    templateUrl: './pokemon-details.component.html',
    styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent {
    details: any = { name: '' };
    name = '';

    constructor(
        private apiService: ApiService,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.name = this.activatedRoute.snapshot.params['name'];
        this.apiService.getPokemonByName(this.name).subscribe(result => this.details = result)
    }
}
