import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    ) { }

  login( email: string, password: string) {
    return this.http.post<any>('http://localhost:4001/user/login', {email, password});
  }

  signUp( email: string, password: string, firstname: string, lastname: string) {
    return this.http.post<any>('http://localhost:4001/user/signUp', {email, password, firstname, lastname});
  }

  getUserByID(id: string) {
    return this.http.get<any>('http://localhost:4001/user/' + id);
  }
}
