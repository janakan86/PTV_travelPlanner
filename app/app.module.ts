import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DisruptionsComponent } from './components/disruptions/disruptions.component';
import { PtvService } from '../../src/app/services/ptv-service.service';
import { RoutesComponent } from './components/routes/routes.component'

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DisruptionsComponent,
    RoutesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRadioModule
  ],
  providers: [PtvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
