import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './photo';
import { PhotoComment } from './photo.comment';


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

  upload(file: File, description: string, allowComments: boolean) {

    const formData = new FormData()
    formData.append('description', description),
    formData.append('allowComments', allowComments ? 'true' : 'false'),
    formData.append('imageFile',file)

    return this.http.post(this.API + 'photos/upload', formData)
  }

  findById(photoId: number){
    return this.http.get<Photo>(this.API + 'photos/' + photoId)
  }

  getComment(photoId: number){

    return this.http.get<PhotoComment[]>(this.API + 'photos/' + photoId + '/comments')

  }

  postComment(photoId: number, commentText: string){

    return this.http.post(this.API + 'photos/' + photoId + '/comments', {commentText})
  }
}
