import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';  // Sample API

  constructor(private http: HttpClient) {}

  // Get all people
  getPeople(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Get a person by ID
  getPerson(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Edit a person
  updatePerson(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // Delete a person
  deletePerson(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
