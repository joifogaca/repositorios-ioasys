import { Routes } from '@angular/router';
import { authGuard } from './pages/login/auth-guard.guard';
import { LoginComponent } from './pages/login/login.component';
import { RepositoriesListComponent } from './pages/repositories/repositories-list/repositories-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'repositories', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'repositories', component: RepositoriesListComponent, canActivate: [authGuard] }

];
