import { Injectable, Signal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user-login.model';
import { BehaviorSubject } from 'rxjs';
import { UserData } from './user-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = signal(false);

  constructor(private router: Router) {
  }

  public login(user: User) {
    if (user.email === 'admin@email.com' &&
    user.password === '123456') {
      this.isAuthenticated.set(true);
      this.router.navigate(['/']);
    }else{
      this.isAuthenticated.set(false);
    }
  }

  logout(){
    this.isAuthenticated.set(false);
    this.router.navigate(['login']);
  }

  public isUserAuthenticated(): Signal<boolean> {
    return this.isAuthenticated;
  }

  public getUserData(): UserData {
    return { name: 'Joice', email: 'admin@email.com'};
  }
}
