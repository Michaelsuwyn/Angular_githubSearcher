import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Http, Response, Headers, RequestOptions} from '@angular/http';



import { AppComponent } from './app.component';
import { GetRequestComponent } from './getRequest.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    GetRequestComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
