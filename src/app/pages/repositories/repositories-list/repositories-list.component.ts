import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { RepositoryService } from '../shared/repository.service';
import { RepositoryComponent } from '../shared/repository/repository.component';

@Component({
  selector: 'app-repositories-list',
  standalone: true,
  imports: [CommonModule, RepositoryComponent],
  providers: [RepositoryService],
  templateUrl: './repositories-list.component.html',
  styleUrl: './repositories-list.component.scss'
})
export class RepositoriesListComponent {

  repositories$!: Observable<any>;

  constructor(private repositoryService: RepositoryService) {
  }


  ngOnInit(): void {
     this.repositories$ = this.repositoryService.list();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
}
