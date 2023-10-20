import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  protected get showNavbar(): boolean {
    return this._auth.isAuthenticated;
  }

  public constructor(
    private readonly _auth: AuthService
  ) { }

  public ngOnInit(): void {
  }

}
