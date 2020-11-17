import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/users';


@Injectable({
    providedIn: 'root'
})
export class AuthService{
    userUrl: string = 'http://localhost:8080/api/users';

    constructor(private http: HttpClient){
     
    }
    public signup(user: User) {
       
        return this.http.post<User>(this.userUrl, user);
       
      }
  
}

export interface AuthResponseData{

      localId: string;
      userName: string;
      userSurname: string;
      email: string;
      expiresIn: string;
      idTocken: string;

}