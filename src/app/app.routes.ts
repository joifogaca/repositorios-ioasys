import { Routes } from '@angular/router';


import { RepositoriesListComponent } from './pages/repositories/repositories-list/repositories-list.component';
import { LoginComponent } from './pages/login-page/login/login.component';
import { authGuard } from './pages/login-page/shared/auth-guard.guard';


export const routes: Routes = [
  { path: '', redirectTo: 'repositories', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'repositories', component: RepositoriesListComponent, canActivate: [authGuard] }

];
