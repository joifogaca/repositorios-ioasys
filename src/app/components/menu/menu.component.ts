import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AuthService } from '../../pages/login-page/shared/auth.service';
import { UserData } from '../../pages/login-page/shared/user-data.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule,
    ButtonModule
  ],
  providers: [AuthService],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  @Input() pageName!: string;
  user!: UserData;



  constructor(private authService: AuthService) {

    this.user = this.authService.getUserData();
  }
  logout() {
    this.authService.logout();
  }

}
