import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit{
  pagina2form!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.pagina2form = new FormGroup({
      nome: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl(null, [Validators.required]),

    })
  }
  onSubmit(){
    const nome = this.pagina2form.value.nome
    const email = this.pagina2form.value.email
    const colore = this.pagina2form.value.colore
    console.log(nome, email, colore)
    this.pagina2form.reset()
  }
}
