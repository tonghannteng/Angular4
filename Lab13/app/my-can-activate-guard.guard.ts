import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {DbService} from './db.service';

@Injectable()
export class MyCanActivateGuard implements CanActivate {
  constructor(private db: DbService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const id = parseInt(route.url[1].path);
    if (id <= 0 || id > this.db.getData().length) {
      this.router.navigate(['/error']);
      return false;
    }
    return true;
  }
}
