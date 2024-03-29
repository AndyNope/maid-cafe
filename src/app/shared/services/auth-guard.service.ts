import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './auth.service';

/**
 * Injectable
 */
@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  /**
   * Creates an instance of auth guard.
   * @param authService
   * @param router
   */
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  /**
   * autentificate the user
   * @param route
   * @param state
   * @returns activate
   */

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .then(
        (authenticated: any) => {
          if (authenticated) {
            return authenticated;
          }
          // this.router.navigate(['/']);
          // this.authService.logout().subscribe(() => {
          //   console.log('logout');
          //   this.authService.setLoginFalse();
          //   this.authService.stopWatching();
          //   this.authService.setUser({
          //     id: '',
          //     username: '',
          //     password: '',
          //     email: '',
          //     role: 0,
          //     active: 0,
          //     deleted: 0,
          //     created: ''
          //   });
          // });
          // this.toasterService.showError('Ups!', 'Sie haben für diese Seite keine Berechtigung.');
        }
      );
  }
  /**
   * autentificate the user in child component
   * @param route
   * @param state
   * @returns activate child
   */
  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}