import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-files',
    templateUrl: './files.component.html',
    styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

    public constructor(
        private readonly _router: Router
    ) { }

    public ngOnInit(): void {
        this._router.navigateByUrl("/files/list");
    }

}