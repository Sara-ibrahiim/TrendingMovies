import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  apiError:string='';
  Loading:boolean = false;
  registerForm = new FormGroup({
    name:new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email:new FormControl(null, [Validators.required,Validators.email]),
    password: new FormControl(null, [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{7,16}$/)]),
    rePassword: new FormControl(null , [Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{7,16}$/)]),
    phone: new FormControl(null ,[ Validators.required,Validators.pattern(/^(022)?01[0125][0-9]{8}$/)])
  

  })

  constructor(private _AuthService:AuthService ,private _Router:Router){}
  registerData(userData:FormGroup){
    this.Loading=true;

    this._AuthService.register(userData.value).subscribe({
      next: (res)=>{console.log(res);
        if(res.message == "success"){
          this._Router.navigate(['/login'])
        }
       }, 
      error: (err)=>{ 
        console.log(err.error.message)
        this.apiError=err.error.message;
        this.Loading=false;



      }, 
      complete: ()=>{ this.Loading=false;}


    })
 
  }

}
