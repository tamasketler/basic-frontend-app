import { AbstractControl } from "@angular/forms";
import { User } from "./user.model";

export interface LoginData {
    username: string;
    password: string;
}

export interface LoginForm {
    username: string | null;
    password: string | null;
    email: string | null;
}