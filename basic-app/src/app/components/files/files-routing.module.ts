import { RouterModule, Routes } from "@angular/router";
import { FileListComponent } from "./file-list-component/file-list.component";
import { FileAddComponent } from "./file-add/file-add.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: FileListComponent,
        children: [
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