import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Repository } from '../repository.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repository',
  standalone: true,
  imports: [CardModule,
    CommonModule
  ],
  templateUrl: './repository.component.html',
  styleUrl: './repository.component.scss'
})
export class RepositoryComponent {

  @Input() repository!: Repository;

}
