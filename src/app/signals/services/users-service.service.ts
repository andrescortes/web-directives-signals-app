import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  public baseUrl: string = 'https://reqres.in/api/users';
  private httpClient = inject(HttpClient);

  constructor() { }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<SingleUserResponse>(`${this.baseUrl}/${id}`)
      .pipe(
        map(singleUserResponse => singleUserResponse.data),
        tap(user => console.log({user})),
      );
  }
}
