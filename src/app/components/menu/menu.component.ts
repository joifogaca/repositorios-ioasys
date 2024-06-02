import { Component, Input, Signal, WritableSignal, signal } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../pages/login/auth.service';
import { UserData } from '../../pages/login/user-data.model';

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
