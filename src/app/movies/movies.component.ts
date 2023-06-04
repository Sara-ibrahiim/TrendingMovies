import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  trendingMovie:any[]=[];
  mediaType:string = 'movie'
  constructor(private _TrendingService:TrendingService){}
  ngOnInit(): void {
    this._TrendingService.getMovies().subscribe({
      next:(data)=> this.trendingMovie =data.results.slice(0,18) 
       
    })
  }

}
