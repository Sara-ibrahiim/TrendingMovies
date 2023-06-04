import { TrendingService } from './../trending.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private _TrendingService:TrendingService){}
  trendingMovie:any[]=[]
  trendingTv:any[]=[]
  trendingPeople:any[]=[]

  ngOnInit(): void {
    this._TrendingService.getTrending('movie').subscribe({
      next:(data)=> this.trendingMovie =data.results.slice(0,10) 
       
    })
    this._TrendingService.getTrending('tv').subscribe({
      next:(data)=> this.trendingTv =data.results.slice(0,10) 
       
    })
    this._TrendingService.getTrending('person').subscribe({
      next:(data)=> this.trendingPeople =data.results.slice(0,10) 
       
    })
   
  }

}
