import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessageService } from 'primeng/api';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


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
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,
      Validators.email]),
    password: new FormControl('', [Validators.required,
      Validators.minLength(5)]),
});

constructor(private messageService: MessageService){}

public login(){
  if(this.loginForm.valid){

  }
  else{
    this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Preencha os campos corretamente' });
  }
  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Usuário ou Senha inválido.' });

}

}
