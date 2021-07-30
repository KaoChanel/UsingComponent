import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Option } from '../_models/option';
import { GlobalConstants } from '../shared/global-constants';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  constructor(private http:HttpClient) { }

  getOption() {
    const strUrl = GlobalConstants.apiURL + 'Option/';
    return this.http.get<Option[]>(strUrl + localStorage.getItem('company'));
  }

  putOption(object: Option) {
    const strUrl = GlobalConstants.apiURL + 'Option/';
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    
    return this.http.put(strUrl + localStorage.getItem('company') + '/' + object.brchId , JSON.stringify(object), httpOptions);
  }
}
