import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { Customer } from 'src/app/_models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomer(custId: number){
    const strUrl = GlobalConstants.apiURL + 'customers/' + localStorage.getItem('company') + '/' + custId;
    return this.http.get<Customer[]>(strUrl);
  }
}
