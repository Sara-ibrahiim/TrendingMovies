import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  trendingActors:any[]=[];
  mediaType:string = 'person'
  constructor(private _TrendingService:TrendingService){}
  ngOnInit(): void {
    this._TrendingService.getActors().subscribe({
      next:(data)=> this.trendingActors =data.results.slice(0,18) 
       
    })
  }

}
