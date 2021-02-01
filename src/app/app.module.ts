import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './controllers/table/table.component';
import { DummyfieldComponent } from './components/dummyfield/dummyfield.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DummyfieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
