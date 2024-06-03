import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RepositoryCardComponent } from '../shared/repository-card/repository-card.component';
import { ModalComponent } from '../shared/repository-modal/modal-repository.component';
import { Repository } from '../shared/repository.model';
import { RepositoryService } from '../shared/repository.service';
import { MenuComponent } from '../../../components/menu/menu.component';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { SliderModule } from 'primeng/slider';


@Component({
  selector: 'app-repositories-list',
  standalone: true,
  imports: [CommonModule,
    RepositoryCardComponent,
    PaginatorModule,
    ButtonModule, DividerModule, SliderModule, FormsModule,
    MenuComponent
  ],
  providers: [RepositoryService,
    DialogService,
    DynamicDialogRef,
    DynamicDialogConfig
  ],
  templateUrl: './repositories-list.component.html',
  styleUrl: './repositories-list.component.scss'
})
export class RepositoriesListComponent {

  repositories$!: Observable<any>;
  ref: DynamicDialogRef | undefined;


  constructor(private repositoryService: RepositoryService,


    public dialogService: DialogService
  ) {
  }


  ngOnInit(): void {
    this.repositories$ = this.repositoryService.list();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  openModal(repository: Repository) {
    this.ref = this.dialogService.open(ModalComponent, {
      header: repository.name,
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000,
      data: { repository: repository }
    })
  }


}
