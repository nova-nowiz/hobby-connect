import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {MeService} from "./services/me.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(private meService: MeService, private router: Router) {
  }

  async canActivate() {
    if (await this.meService.resolve()) return true;
    return this.router.parseUrl('/login');
  }

}
