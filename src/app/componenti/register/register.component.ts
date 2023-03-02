import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private autService: AuthService, private router: Router) { }
  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    this.autService.signUp(email, password).subscribe(data => {
      console.log(data)
    })
    form.reset()
  }

  onLogin() {
    this.router.navigate(['/login'])
  }
}
