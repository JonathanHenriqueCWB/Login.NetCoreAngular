import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login.usuario.component.html',
  styleUrls: ['./login.usuario.component.css']
})
export class LoginUsuarioComponente {

  constructor() {
  }

  public logar() {
    console.log("Logando com usuario...")
  }
}
