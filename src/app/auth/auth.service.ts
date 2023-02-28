import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../modelli/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user!: User;
  isLoggedIn = true
  registerURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDW5RT6p6RT3qVBtg5uQidZQN8c0W61sDg'
  loginURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDW5RT6p6RT3qVBtg5uQidZQN8c0W61sDg'
  
  constructor(private http: HttpClient, private router: Router) { }

  isAuthenticated(){
    return this.isLoggedIn
  }

  signUp(email: string, password: string){
    return this.http.post(this.registerURL, {email: email, password: password, returnSecureToken: true})
  }

  logIn(email: string, password: string){
    return this.http.post(this.loginURL, {email: email, password: password, returnSecureToken: true})
  }

  createUser(email: string, id: string, token: string, expirationDate: Date){
    this.user = new User(email, id , token, expirationDate)
    this.isLoggedIn = true
  }
  logout(){
    this.isLoggedIn = false
    localStorage.removeItem('user')
    this.router.navigate(['/login'])
    console.log(this.isLoggedIn)
  }
}

