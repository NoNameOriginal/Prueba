import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Field } from '../controllers/models/field';

@Injectable({
  providedIn: 'root'
})
export class TableService {

    private fields: Field[]

    constructor(){}

    getFields(): Observable<Field[]>{
      this.fields=[
        {
          nombre: "Parametro 4",
          tipoCampo: "string",
          valor: 2
        },
        {
          nombre: "Parametro 2",
          tipoCampo: "fecha",
          valor: "21/21/2121"
        }
      ]; 
      return of(this.fields);
    }

}