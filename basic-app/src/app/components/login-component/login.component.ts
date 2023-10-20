import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  protected get isUser(): boolean {
    return this._auth.isUser;
  }

  protected form = new FormGroup({
    username: new FormControl("", [
      Validators.required
    ]),
    password: new FormControl("", Validators.required),
    email: new FormControl("")
  })

  public constructor(
    private readonly _auth: AuthService
  ) { }

  public ngOnInit(): void {
  }

  protected signIn(): void {
    const { username, password } = this.form.value;
    this._auth.login({
      username: username ?? "",
      password: password ?? ""
    });
  }

  protected registerSignIn(): void {
    const { username, password, email } = this.form.value;
    if (!username && !password && !email) return;
    const req: User = {
      username: username ?? "",
      password: password ?? "",
      email: email ?? "",
    };
    if (req.username === "" && req.password === "" && req.email === "") {
      alert("Error: Register not possible due wrong data!");
      return;
    };
    this._auth.register(req);
  }

}
