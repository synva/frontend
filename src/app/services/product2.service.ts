import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Response } from '../types/response';
import { Product } from '../models/product.model';

@Injectable()
export class Product2Service {
  products: Product[];

  constructor(private http: HttpClient) {
    this.products = [];
  }

  getProductMaster(): Observable<void> {
    console.log('product2Service.getProductMaster');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: {}
    };
    // return this.http.get<Response.Product[]>(environment.backend + 'getProductMaster', httpOptions).pipe(
    //   map((response: Response.Product[]) => {
    //     this.products = response.map((one) => new Product(one));
    //   }),
    //   catchError((error) => {
    //     // handle error
    //     return throwError(error);
    //   })
    // );
    return this.mockApi().pipe(
      map((data) => {
        this.products = data.map((one) => new Product(one));
      })
    );
  }

  private mockApi(): Observable<Response.Product[]> {
    return of([
      {
        id: '001',
        name: '良品'
      },
      {
        id: '002',
        name: '欠品'
      }
    ]);
  }
}
