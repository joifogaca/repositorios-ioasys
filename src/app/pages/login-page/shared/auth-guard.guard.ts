import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';


export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isUserAuthenticated()
    ? true :
    inject(Router).navigate(['login']);
};
