import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  constructor(private _TrendingService:TrendingService,private _ActivatedRoute:ActivatedRoute){}
  item:any;
  similar:any[]=[];
  media_type:string = '';
  ngOnInit(): void {
    let{id , mediaType}= this._ActivatedRoute.snapshot.params;
    this.media_type=mediaType
    this._TrendingService.getDetails( id , mediaType).subscribe({
      next:(data)=>this.item =data
      

    })
    this._TrendingService.getSimilar( id , mediaType).subscribe({
      next:(data)=>{
        this.similar =data.results.filter((item:any)=>item.poster_path !==null).slice(0,6)
      console.log(data.results)
    }
      

    })


    
  }


  antherDetails(id:string,mediaType:string){

    this.media_type=mediaType
    this._TrendingService.getDetails( id , mediaType).subscribe({
      next:(data)=>this.item =data
      

    })
    this._TrendingService.getSimilar( id , mediaType).subscribe({
      next:(data)=>{
        this.similar =data.results.filter((item:any)=>item.poster_path !==null).slice(0,6)
      console.log(data.results)
    }
      

    })

  }
}
