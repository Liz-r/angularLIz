import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemeApiService {

  constructor(private http: HttpClient) { }
  getMeme(){
    return this.http.get("https://meme-api.com/gimme");
  }
}
