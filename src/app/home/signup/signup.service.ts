import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable({providedIn: 'root'})

export class SignUpService {
  
  constructor(private http: HttpClient) {}
  
   API_URL = 'http://localhost:3000'

    checkUserNameTaken(userName: string) {

      return this.http.get(this.API_URL + '/user/exists/' + userName)
    }

    signup(newUser: NewUser){
      return this.http.post(this.API_URL + '/user/signup' ,newUser)
    }
}