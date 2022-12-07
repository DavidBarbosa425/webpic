import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './photo';


@Injectable({providedIn: 'root'})

export class PhotoService {

  API: string = 'http://localhost:3000/'

  photos:Photo[] = [];
 
  constructor(private http: HttpClient) { }

  listFromUser(userName: string): Observable<Photo[]> {

  return this.http
    .get<Photo[]>(this.API + `${userName}/photos`)

  }

  listFromUserPaginated(userName: string, page: number): Observable<Photo[]> {
  const params = new HttpParams().append('page', page.toString())

  return this.http
    .get<Photo[]>(this.API + `${userName}/photos`, { params: params})

  }
}
