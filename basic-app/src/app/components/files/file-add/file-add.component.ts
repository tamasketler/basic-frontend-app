import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FileData } from 'src/app/models/file.model';
import { FileListService } from 'src/app/services/file-list.service';

@Component({
  selector: 'app-file-add',
  templateUrl: './file-add.component.html',
  styleUrls: ['./file-add.component.scss']
})
export class FileAddComponent implements OnInit {

  protected get fileProvided(): boolean {
    return this.form.controls.file.value ?? false;
  }

  protected form = new FormGroup({
    file: new FormControl()
  })

  private _file: File | null = null;

  public constructor(
    private readonly _fileService: FileListService,
    private readonly _router: Router
  ) { }

  public ngOnInit(): void {
  }

  protected onChange(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this._file = file;
    }
  }

  protected add(): void {
    if (!this._file) return;

    const model: FileData = {
      file: this._file
    }

    console.log(model)

    this._fileService.files.push(model);

    alert("Upload successfull!");
    this._router.navigateByUrl("/files/list");
  }

}
