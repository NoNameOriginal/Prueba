import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TableService } from 'src/app/services/field.services';
import { Field } from '../models/field';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  fields$ : Observable<Field[]>

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.fields$ = this.tableService.getFields();
  }

  processCambiarButton(field: Field){
    console.log("Se cambio el valor de " + field.nombre + " a " + field.valor);
  }

}
