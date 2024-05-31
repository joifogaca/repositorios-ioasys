import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FloatLabelModule,
    InputTextModule,
    InputGroupAddonModule,
    InputGroupModule,
    ButtonModule,
    PasswordModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
