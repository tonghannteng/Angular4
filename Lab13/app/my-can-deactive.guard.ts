import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs/Observable';

export class MyCanDeactiveGuard {

  canDeactivate(component): Observable<boolean> | boolean {
    // check if method canDeactivate is available on the component, if yes call it, otherwise return true
    return component.canDeactivate ? component.canDeactivate() : true;
  }

}
