import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Repository } from '../repository.model';
import { RepositoryInfoComponent } from '../repository-info/repository-info.component';

@Component({
  selector: 'app-repository',
  standalone: true,
  imports: [CardModule,
    RepositoryInfoComponent
  ],
  providers: [
    DialogService
  ],
  templateUrl: './repository-card.component.html',
  styleUrl: './repository-card.component.scss'
})
export class RepositoryCardComponent implements OnInit {



  @Input() repository!: Repository;
  @Output() openModalRepository = new EventEmitter<Repository>();



  constructor() {

  }

  ngOnInit(): void {
  }


  openModal(repository: Repository) {
    this.openModalRepository.emit(repository);
  }
}
