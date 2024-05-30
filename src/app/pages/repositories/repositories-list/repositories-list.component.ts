import { Component } from '@angular/core';
import { RepositoryService } from '../shared/repository.service';
import { Observable } from 'rxjs';
import { Repository } from '../shared/repository.model';

@Component({
  selector: 'app-repositories-list',
  standalone: true,
  imports: [],
  templateUrl: './repositories-list.component.html',
  styleUrl: './repositories-list.component.scss'
})
export class RepositoriesListComponent {

  repositories$!: Observable<Repository[]>;
  /**
   *
   */
  constructor(private repositoryService: RepositoryService) {
  }

  ngOnInit(): void {
    this.repositories$ = this.repositoryService.list();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
}
