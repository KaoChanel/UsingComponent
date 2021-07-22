import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from '../shared/global-constants';
import { FileAttach } from '../_models/file_attach';

@Injectable({
  providedIn: 'root'
})
export class FileAttachService {

  constructor(private http: HttpClient) { }

  getFileAttachment(soid: number) {
    const strUrl = GlobalConstants.apiURL + 'FileAttach/';
    return this.http.get<FileAttach[]>(strUrl + localStorage.getItem('company') + '/' + soid);
  }
}
