import { User } from './../user';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoading:boolean = false;
  constructor(private _AuthService:AuthService){
    _AuthService.user.subscribe({
      next: () => {
        if (_AuthService.user.getValue() !== null) {
  
          this.isLoading = true;
       }
       else{
         this.isLoading = false;
       }
  
      }
    })
  
  }



singOut(){
  this._AuthService.singOut()
}

}
