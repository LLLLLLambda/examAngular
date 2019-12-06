import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  findUser(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/session')
  }

  updateUser(user: User): Observable<void> {
    return this.http.put<void>('http://localhost:3000/session/1', user)
  }
}
