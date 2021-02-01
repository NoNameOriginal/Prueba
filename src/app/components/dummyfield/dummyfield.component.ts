import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Field } from 'src/app/controllers/models/field';

@Component({
  selector: 'app-dummyfield',
  templateUrl: './dummyfield.component.html',
  styleUrls: ['./dummyfield.component.scss']
})
export class DummyfieldComponent implements OnInit {

  @Input() field: Field;

  @Output() cambiarButton = new EventEmitter<Field>();

  constructor() { }

  ngOnInit(): void {
  }

  cambiar(){
    this.cambiarButton.emit(this.field);
  }
}
