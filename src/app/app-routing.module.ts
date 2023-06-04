import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ActorsComponent } from './actors/actors.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [

  {path:'' , redirectTo:'login',pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'movies' , component:MoviesComponent},
  {path:'tv' , component:TvShowsComponent},
  {path:'actors' , component:ActorsComponent},
  {path:'details/:id/:mediaType' , component:DetailsComponent},
  {path:'register' , component:RegisterComponent},
  {path:'login' , component:LoginComponent},
  {path:'**' , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
