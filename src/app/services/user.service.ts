import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Response } from '../types/response';
import { User } from 'src/app/models/user.model';
import { ApiService } from './api.service';

@Injectable()
export class UserService {
  user: User | null;

  constructor(private apiService: ApiService) {}

  authenticate(username: string, password: string): Observable<void> {
    return this.mockApi().pipe(
      map((data) => {
        this.user = new User(data);
      })
    );
    // return this.apiService.post<Response.User>('/authenticate', { username, password }).pipe(
    //   map((data) => {
    //     this.user = new User(data);
    //   })
    // );
  }

  login(): Observable<void> {
    return this.mockApi().pipe(
      map((data) => {
        this.user = new User(data);
      })
    );
    // return this.apiService.get<Response.User>('/login').pipe(
    //   map((data) => {
    //     this.user = new User(data);
    //   })
    // );
  }

  logout(): Observable<void> {
    return this.mockApi().pipe(
      map((data) => {
        this.user = null;
      })
    );
    // return this.apiService.get('/logout').pipe(
    //   map(() => {
    //     this.user = null;
    //   })
    // );
  }

  private mockApi(): Observable<Response.User> {
    return of({
      id: '001',
      role: 0,
      language: 'en'
    });
  }
}
