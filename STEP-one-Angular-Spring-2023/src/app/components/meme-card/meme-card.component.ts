import { Component } from '@angular/core';
import { MemeApiService } from 'src/app/services/meme.api.service';

@Component({
  selector: 'app-meme-card',
  templateUrl: './meme-card.component.html',
  styleUrls: ['./meme-card.component.css']
})
export class MemeCardComponent {
  constructor(private memeApiService: MemeApiService){}

  meme: any={};
  ngOnInit(): void{
    this.getMeme();
  }
  getMeme(){
    this.memeApiService.getMeme().subscribe((data)=>{
      this.meme=data;
    })
  }  
}
