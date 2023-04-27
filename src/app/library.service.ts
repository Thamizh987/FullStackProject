import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Library } from './library';
@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private baseURL = "http://localhost:8080/FullStackproject/libraryRecords";

  constructor(private httpClient: HttpClient) { }

  /*To get the list of books present in the database */
  getRecordsFromDb(): Observable<Library[]> {
    return this.httpClient.get<Library[]>(`${this.baseURL}`);
  }

  /*To add the book in the booklist */
  createLibraryRecords(library: Library): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, library);
  }

  /*To search the book by its bookID */
  searchById(bookId: number): Observable<Library> {
    return this.httpClient.get<Library>(`${this.baseURL}/${bookId}`);
  }

  /*To update the book details by passing the bookId of the book along with the updated record */
  updateBookDetails(bookId: number, library: Library): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${bookId}`, library);
  }

  /*To delete the book record by passing its bookId */
  deleteRecord(bookId: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${bookId}`);
  }

  /*To delete all the books present in the booklist */
  deleteAll(): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}`);
  }

  /*To find the book by its subject name by passing the name of the subject */
  findBysubjectName(subjectName: any): Observable<Library[]> {
    return this.httpClient.get<Library[]>(`${this.baseURL}?subjectName=${subjectName}`);
  }

  /*To find the books by the department name */
  findByEEE(): Observable<Library[]> {
    return this.httpClient.get<Library[]>(`${this.baseURL}/viewByEEE`);
  }
  findByECE(): Observable<Library[]> {
    return this.httpClient.get<Library[]>(`${this.baseURL}/viewByECE`);
  }
  findByIT(): Observable<Library[]> {
    return this.httpClient.get<Library[]>(`${this.baseURL}/viewByIT`);
  }
  findByMech(): Observable<Library[]> {
    return this.httpClient.get<Library[]>(`${this.baseURL}/viewByMech`);
  }
  findByCSE(): Observable<Library[]> {
    return this.httpClient.get<Library[]>(`${this.baseURL}/viewByCSE`);
  }
}