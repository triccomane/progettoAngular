import { Component, OnInit } from '@angular/core';
import { _countGroupLabelsBeforeOption } from '@angular/material/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/servizi/firebase.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const urlFirebase = 'https://progettoangular-d8f2b-default-rtdb.europe-west1.firebasedatabase.app/'

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];

@Component({
    selector: 'app-pagina1',
    templateUrl: './pagina1.component.html',
    styleUrls: ['./pagina1.component.css']
  })
export class Pagina1Component implements OnInit{
  elements: any
  chiave: String[] = []
  

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'delete'];
  // dataSource = ELEMENT_DATA;
  dataSource = []
  constructor(private firebase: FirebaseService, private router: Router) {}
  ngOnInit(): void {
    this.firebase.getElements(urlFirebase+'PeriodicElements.json')
    .subscribe((data: any) =>{
      
      console.log(data)
      this.elements = Object.keys(data).map((key)=> {
        this.chiave.push(key)
        //console.log(this.chiave, "questo è l'elemento")
        return data[key];
      })
      //console.log(this.elements)
      this.dataSource = this.elements
    })
  }
  onDeleteElemento(element: any){
    let key = this.chiave[this.elements.indexOf(element)].toString();
    this.firebase.deleteElement(urlFirebase + 'PeriodicElements', key)
    .subscribe(data => {
      this.router.navigate(['/pagina1'])
    })
    
  }
}
