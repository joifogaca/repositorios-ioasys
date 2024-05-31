import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repository } from './repository.model';
import { catchError, first, groupBy, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private readonly API = 'https://api.github.com/users/joifogaca/repos';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Repository[]>(this.API);
  }
}
