import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattleFieldComponent } from './battle-field/battle-field.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { FailComponent } from './fail/fail.component';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
    { path: 'home', component: PokeListComponent },
    { path: 'pokemon-details/:name', component: PokemonDetailsComponent },
    { path: 'battle-field', component: BattleFieldComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: FailComponent },
]

@NgModule({
    imports: [MatFormFieldModule, RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
