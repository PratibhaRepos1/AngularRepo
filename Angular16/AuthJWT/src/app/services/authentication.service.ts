// src/app/services/authentication.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Role } from '../_models/role';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<any>;

  
  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
 
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`/users/authenticate`, { username: username, password: password })
      .pipe(map(user => {
        // store user details and JWT token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isAdmin(): boolean {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return currentUser && currentUser.role === Role.Admin;
  }

}