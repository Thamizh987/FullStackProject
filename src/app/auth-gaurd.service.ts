import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  /*Auth-gaurd is to protect the confidential details (i.e) the user cannot access the details without
  logged into the application or by simply pasting the path from the routing module */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.userLoggedIn())
      return true;

    this.router.navigate(['log-in']);
    return false;
  }
}
