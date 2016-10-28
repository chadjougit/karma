

import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot, RouterStateSnapshot
} from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class LoginguardService {


  constructor(private router: Router, private loginService: LoginService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (!this.loginService.loggedIn) {

      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
