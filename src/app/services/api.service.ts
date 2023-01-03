import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { map, catchError, timeout } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
  constructor(private router: Router, private http: HttpClient) {}

  get<T>(api: string, params = {}, isLock = true): Observable<T> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params
    };
    if (isLock) {
      // lock ui
    }
    return this.http.get<T>(environment.backend + api, httpOptions).pipe(
      map((response: T) => {
        return response;
      }),
      catchError((error) => {
        if (isLock) {
          // unlock ui
        }
        // handle error
        return throwError(error);
      })
    );
  }

  post<T>(api: string, params = {}, isLock = true): Observable<T> {
    if (isLock) {
      // lock ui
    }
    return this.http.post<T>(environment.backend + api, params).pipe(
      map((response: T) => {
        return response;
      }),
      catchError((error) => {
        if (isLock) {
          // unlock ui
        }
        // handle error
        return throwError(error);
      })
    );
  }
}
