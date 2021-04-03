import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { SaleOrderHeader } from './../../_models/saleOrderHeader';
import { SaleOrderDetail } from 'src/app/_models/saleOrderDetail';
import { GlobalConstants } from './../../shared/global-constants';
import { SaleOrderInfo } from 'src/app/_models/saleOrderInfo';

@Injectable({
  providedIn: 'root'
})
export class SaleOrderService {

  constructor(private http: HttpClient, public datePipe: DatePipe) { }

  /** GET heroes from the server */
  async getSaleOrderHeader(start: Date, end: Date): Promise<SaleOrderHeader[]> {
    return await this.http.get<SaleOrderHeader[]>(GlobalConstants.apiURL + 'SaleOrderHeader/GetOrder/' + localStorage.getItem('company')?.toString() + '/' + this.datePipe.transform(start, 'yyyy-MM-dd')?.toString() + '/' + this.datePipe.transform(end, 'yyyy-MM-dd')?.toString())
      .pipe(
        tap(_ => this.log('fetched saleOrderHeader')),
        catchError(this.handleError<SaleOrderHeader[]>('getSaleOrderHeader', []))
      ).toPromise();
  }

  getSaleOrderHeaderById(soid: Number) {
    const strUrl = GlobalConstants.apiURL + 'SaleOrderHeader/';
    return this.http.get<SaleOrderHeader>(strUrl + localStorage.getItem('company') + '/' + soid);
  }

  getSaleOrderDetail(soid: Number) {
    const strUrl = GlobalConstants.apiURL + 'SaleOrderDetail/';
    return this.http.get<SaleOrderDetail[]>(strUrl + localStorage.getItem('company') + '/' + soid);
  }

  getSaleOrder(soid: Number) {
    const strUrl = GlobalConstants.apiURL + 'SaleOrderDetail/GetSaleOrder/';
    return this.http.get<SaleOrderInfo[]>(strUrl + localStorage.getItem('company') + '/' + soid);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`HeroService: ${message}`);
  }
}
