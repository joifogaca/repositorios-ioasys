import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FloatLabelModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    PasswordModule,
    ToastModule
  ],
  providers: [MessageService, AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required,
    Validators.email]),
    password: new FormControl('', [Validators.required,
    Validators.minLength(5)]),
  });

  constructor(private messageService: MessageService,
    private authService: AuthService) { }

  public login() {
    if (this.loginForm.valid) {

      this.authService.login(
        {
          email: this.loginForm.controls.email.value,
          password: this.loginForm.controls.password.value
        });
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Usuário ou Senha inválido.' });

    }
    else {
      this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Preencha os campos corretamente' });
    }

  }

}
