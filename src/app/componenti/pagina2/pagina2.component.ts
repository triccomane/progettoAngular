import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit{
  pagina2form!: FormGroup;
  urlFirebase = 'https://progettoangular-d8f2b-default-rtdb.europe-west1.firebasedatabase.app/'

  constructor(private firebase: FirebaseService){}

  ngOnInit(): void {
    this.pagina2form = new FormGroup({
      position: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      weight: new FormControl(null, [Validators.required]),
      symbol: new FormControl(null, [Validators.required]),

    })

  }
  onSubmit(){
    // const nome = this.pagina2form.value.nome
    // const email = this.pagina2form.value.email
    // const colore = this.pagina2form.value.colore
    // console.log(nome, email, colore)
    // this.pagina2form.reset()

    this.firebase
    .insertPersona(
      this.urlFirebase + 'PeriodicElements.json', //controllare se url savlarto così va bene
      {position: this.pagina2form.value.position, 
      name: this.pagina2form.value.name,
      weight: this.pagina2form.value.weight,
      symbol: this.pagina2form.value.symbol,
      }
    )
      .subscribe(data => {
        console.log(data)
      })
  }
}
