import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertFormComponent } from './insert-form/insert-form.component';
import { DataTableComponent } from './data-table/data-table.component';
import { RestAPIService } from './rest-api.service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    InsertFormComponent,
    DataTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RestAPIService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
