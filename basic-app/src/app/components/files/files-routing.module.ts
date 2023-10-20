import { RouterModule, Routes } from "@angular/router";
import { FileListComponent } from "./file-list-component/file-list.component";
import { FileAddComponent } from "./file-add/file-add.component";
import { NgModule } from "@angular/core";
import { FilesComponent } from "./files.component";

const routes: Routes = [
    {
        path: '',
        component: FilesComponent,
        children: [
            {
                path: 'list',
                component: FileListComponent,
            },
            {
                path: 'add',
                component: FileAddComponent,
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FilesRoutingModule { }