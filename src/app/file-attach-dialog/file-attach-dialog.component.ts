import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileAttach } from '../_models/file_attach';
import { FileAttachService } from '../_service/file-attach.service';

@Component({
  selector: 'app-file-attach-dialog',
  templateUrl: './file-attach-dialog.component.html',
  styleUrls: ['./file-attach-dialog.component.css']
})
export class FileAttachDialogComponent implements OnInit {
  public allFiles?: FileAttach[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: {soId:any}, public attachService: FileAttachService) {}

  ngOnInit(): void {
    this.getAttachment(this.data.soId);
  }

  getAttachment(soId: any): void {
    this.attachService.getFileAttachment(soId)
    .subscribe(data => {
      this.allFiles = data;
    });
  }

}
