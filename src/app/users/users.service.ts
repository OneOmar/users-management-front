import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // Base URL
  private readonly apiUrl = 'http://localhost:8080/api/users';

  // Inject HttpClient to perform HTTP requests
  constructor( private http: HttpClient ) { }

  /**
   * Fetch all users from the backend
   * @returns Observable emitting an array of User
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
