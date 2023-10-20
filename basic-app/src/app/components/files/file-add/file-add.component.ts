import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-file-add',
  templateUrl: './file-add.component.html',
  styleUrls: ['./file-add.component.scss']
})
export class FileAddComponent implements OnInit {

  protected form = new FormGroup({
    File: new FormControl()
  })

  public constructor() { }

  public ngOnInit(): void {
  }

}
