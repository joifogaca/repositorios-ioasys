import { Component, Input } from '@angular/core';
import { Repository } from '../repository.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repository-info',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './repository-info.component.html',
  styleUrl: './repository-info.component.scss'
})
export class RepositoryInfoComponent {

  @Input() repository!: Repository;
}
