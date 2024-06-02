import { Component, inject } from '@angular/core';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { RepositoryInfoComponent } from '../repository-info/repository-info.component';
import { Repository } from '../repository.model';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [RepositoryInfoComponent],
  providers: [DialogService],
  templateUrl: './modal-respository.component.html',
  styleUrl: './modal-repository.component.scss'
})
export class ModalComponent {
  repository: Repository;
  config = inject(DynamicDialogConfig);
  constructor() {

    this.repository = this.config.data.repository;
  }
}
