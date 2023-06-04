import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {
  trendingTv:any[]=[];
  mediaType:string = 'tv'
  constructor(private _TrendingService:TrendingService){}
  ngOnInit(): void {
    this._TrendingService.getTv().subscribe({
      next:(data)=> this.trendingTv =data.results.slice(0,18) 
       
    })
  }
}
