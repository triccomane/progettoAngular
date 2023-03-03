import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {
  pagina2form!: FormGroup;
  urlFirebase = 'https://progettoangular-d8f2b-default-rtdb.europe-west1.firebasedatabase.app/'

  constructor(private firebase: FirebaseService, private router: Router) { }

  ngOnInit(): void {
    this.pagina2form = new FormGroup({
      position: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      weight: new FormControl(null, [Validators.required]),
      symbol: new FormControl(null, [Validators.required]),

    })

  }
  onSubmit() {

    this.firebase
      .insertElement(
        this.urlFirebase + 'PeriodicElements.json',
        {
          position: this.pagina2form.value.position,
          name: this.pagina2form.value.name,
          weight: this.pagina2form.value.weight,
          symbol: this.pagina2form.value.symbol,
        }
      )
      .subscribe(data => {
        //console.log(data)
        this.router.navigate(['/pagina1'])
      })
  }


}
