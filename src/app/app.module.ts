import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertiesModule } from './properties.module';
import { HomeDetailsComponent } from './Components/home-details/home-details.component';
import { HomeComponent } from './Components/home/home.component';
import { HousinglocationComponent } from './Components/housinglocation/housinglocation.component';
import { PropertiesService } from './services/properties.service';
import { ReactiveFormsModule} from '@angular/forms';
import { DetalhesComponent } from './Components/detalhes-properties/detalhes.component';
import { ContactsComponent } from './Components/contacts/contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeDetailsComponent,
    HousinglocationComponent,
    HomeComponent,
    DetalhesComponent,
    ContactsComponent,
    ],
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    PropertiesModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule
  ],

  providers: [ PropertiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
