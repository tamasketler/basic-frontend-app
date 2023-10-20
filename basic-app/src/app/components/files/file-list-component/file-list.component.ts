import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { FileData } from 'src/app/models/file.model';
import { FileListService } from 'src/app/services/file-list.service';

@Component({
  selector: 'app-file-list-component',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {

  protected get hasFile(): boolean {
    return this._files.some(f => f);
  }

  protected files$: Observable<FileData[]> = this._fileService.getFiles().pipe(
    tap(model => this._files = model)
  );

  private _files: FileData[] = [];

  public constructor(
    private readonly _fileService: FileListService
  ) { }

  public ngOnInit(): void {
  }

  protected delete(id: number): void {
    this._fileService.files.forEach((f, index) => {
      if (index == id) this._fileService.files.splice(index, 1);
    });
  }

}
