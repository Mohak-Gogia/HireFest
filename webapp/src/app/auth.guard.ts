import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: AuthService, private router: Router) {
  }

  public canActivate(): boolean {
    if(this.service.isLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
