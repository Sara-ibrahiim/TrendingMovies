import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) { 
    if (localStorage.getItem('userToken')!== null) {
      this.decodeuser();
      
    }
  }
  user = new BehaviorSubject(null);
  decodeuser(){
    let incodedToken =JSON.stringify( localStorage.getItem('userToken'))
    let decodedToken:any = jwtDecode(incodedToken)
    this.user.next(decodedToken)
  }

  register(userData:FormGroup):Observable<any>
  {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userData)

  }
  login(userData:FormGroup):Observable<any>
  {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userData)

  }

singOut(){
  localStorage.removeItem('userToken');
  this.user.next(null);
  this._Router.navigate(['/login'])
}




}
