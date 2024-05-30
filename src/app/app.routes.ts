import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RepositoriesListComponent } from './pages/repositories/repositories-list/repositories-list.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'repositories', component: RepositoriesListComponent }

];
