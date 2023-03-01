import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  constructor(private authService: AuthService){}

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm){
    const email = form.value.email
    const password = form.value.password
    this.authService.logIn(email, password).subscribe((data :any) => {
      const expirationDate = new Date(new Date().getTime() + data.expiresIn *1000)
      this.authService.createUser(data.email, data.localID, data.idToken, expirationDate)
      localStorage.setItem('user', JSON.stringify(this.authService.user))
      console.log(this.authService.user)
      form.reset()
    })

  }
}
