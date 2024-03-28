import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://projectdemo-9f2d5-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    console.log('control in userservice ->')
    return this.http.get<User[]>(`${this.baseUrl}/users.json`);
  }
}
