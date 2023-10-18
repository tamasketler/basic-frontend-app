import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { LoginData } from "../models/auth.model";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    public get isUser(): boolean {
        return this._users.some(u => u);
    }

    private _users: User[] = [
        { username: "tamas", password: "admin", email: "tamas@gmail.com" }
    ];

    public constructor(
        private readonly _router: Router
    ) { }

    public login(data: LoginData): void {
        this._login(data);
    }

    private _login(data: LoginData): void {
        const user = this._users.find(u => u.username === data.username);
        if (user) {
            user.password === data.password ? this._router.navigateByUrl("/files") : alert("Password is not correct!");
        } else {
            alert("The user does not exist!");
        }
    }

    public register(user: User): void {
        this._register(user);
    }

    private _register(user: User): void {
        this._users.push(user);
        this._login(user);
    }
}