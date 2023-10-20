import { NgModule } from "@angular/core";
import { FileListComponent } from "./file-list-component/file-list.component";
import { FileAddComponent } from "./file-add/file-add.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app/app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [
        FileListComponent,
        FileAddComponent
    ]
})
export class FilesModule { }