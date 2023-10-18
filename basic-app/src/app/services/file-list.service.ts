import { Injectable } from "@angular/core";
import { FileData } from "../models/file.model";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class FileListService {

    public get files(): FileData[] {
        return this._files;
    }
    public set files(value: FileData[]) {
        this._files = value;
    }

    private _files: FileData[] = [];

    public constructor() { }

    public getFiles(): Observable<FileData[]> {
        return of(this._files);
    }

}