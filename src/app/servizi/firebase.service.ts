import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  insertElement(url: string, body: {}){
    return this.http.post(`${url}?auth=${this.authService.user.token}`, body)
  }

  getElements(url: string){
    return this.http.get(`${url}?auth=${this.authService.user.token}`)
  }

  deleteElement(url: string, id: string){
    return this.http.delete(`${url}/${id}.json?auth=${this.authService.user.token}`)
  }
}


