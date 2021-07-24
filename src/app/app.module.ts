import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './book/list/list.component';
import { DetailComponent } from './book/detail/detail.component';
import { UpdateComponent } from './book/update/update.component';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatComponent } from './book/creat/creat.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    UpdateComponent,
    CreatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
