import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  apiError:string='';
  Loading:boolean = false;
  loginForm = new FormGroup({
    email:new FormControl(null, [Validators.required,Validators.email]),
    password: new FormControl(null, [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{7,16}$/)]),
  })
  constructor(private _AuthService:AuthService ,private _Router:Router){}
  loginData(userData:FormGroup){
    this.Loading=true

    this._AuthService.login(userData.value).subscribe({
      next: (res)=>{console.log(res);
        if(res.message == "success"){
          localStorage.setItem('userToken',res.token)
          this._AuthService.decodeuser()
          this._Router.navigate(['/home'])
         
        }
       }, 
       error: (myErrors)=>{ 
        console.log(myErrors.error.errors.message)
        this.apiError=myErrors.error.errors.message;
        this.Loading=false;



      }, 
      complete: ()=>{ this.Loading=false;}


    })
 
  }



  
}
