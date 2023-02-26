import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = true
  url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDW5RT6p6RT3qVBtg5uQidZQN8c0W61sDg'

  constructor(private http: HttpClient) { }

  isAuthenticated(){
    return this.isLoggedIn
  }

  signUp(body: {}){
    return this.http.post(this.url, body)
  }

}

