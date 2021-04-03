import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { Employee } from 'src/app/_models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployeeById(empId: any){
    const strUrl = GlobalConstants.apiURL + 'employees/' + localStorage.getItem('company') + '/' + empId;
    return this.http.get<Employee>(strUrl);
  }
}
