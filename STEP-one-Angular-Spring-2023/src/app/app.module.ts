import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
 //import { MatOptgroup } from '@angular/material/core';
 import { MatOptionModule } from '@angular/material/core';
 import { MatFormFieldModule } from '@angular/material/form-field';
 import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormControl } from '@angular/forms';

import { ApiService } from './services/api.service';

import { PokeListComponent } from './poke-list/poke-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { UpperCaseCustomPipe } from './pipes/upper-case-custom.pipe';
import { BattleFieldComponent } from './battle-field/battle-field.component';
import { LowerCaseCustomPipe } from './pipes/lower-case-custom.pipe';
import { FailComponent } from './fail/fail.component';
import { MemeCardComponent } from './components/meme-card/meme-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent,
    PokemonDetailsComponent,
    PokeCardComponent,
    UpperCaseCustomPipe,
    BattleFieldComponent,
    LowerCaseCustomPipe,
    FailComponent,
    MemeCardComponent,
    
    
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    //FormControl,
   // MatOptgroup,  
     MatOptionModule,
     MatSelectModule,
     MatFormFieldModule,
     MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule { }
