import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usuario = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) {

  }

  Ingressar() {
    console.log(this.usuario)
    const { email, password } = this.usuario
    this.authService.login(email, password).then(res => {
      console.log("Login Registrado!", res)
    })
  }

  IngressarComGoogle() {
    const { email, password } = this.usuario
    this.authService.loginWithGoogle(email, password).then(res => {
      console.log("Login Registrado!", res)
    })
  }

  obterUsuarioLogado() {
    this.authService.getUserLogged().subscribe(res => {
      console.log(res?.email)
    });
  }

  logout() {
    this.authService.logout();
  }

}
