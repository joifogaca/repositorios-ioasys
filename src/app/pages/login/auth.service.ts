import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = signal(false);

  constructor(private router: Router) {

  }

  login(user: User) {
    console.log(user);
    if (user.email === 'admin@email.com' &&
    user.password === '123456') {
      console.log('no if');
      this.isAuthenticated.set(true);
      console.log(this.isAuthenticated);
      this.router.navigate(['/']);
    }else{
      this.isAuthenticated.set(false);
    }
  }

  public isUserAuthenticated() {

    console.log(this.isAuthenticated);
    return this.isAuthenticated;
  }
}
