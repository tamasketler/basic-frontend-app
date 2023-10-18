import { LoginData } from "./auth.model";

export interface User extends LoginData {
    email: string;
}