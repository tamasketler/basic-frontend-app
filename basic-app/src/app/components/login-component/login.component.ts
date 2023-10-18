import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  protected get isUser(): boolean {
    return true;
  }

  public constructor() { }

  public ngOnInit(): void {
  }

  protected signIn(): void {

  }

  protected registerSignIn(): void {

  }

}
