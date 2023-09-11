import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PropertiesComponent } from './Components/properties/properties.component';

@NgModule({
  declarations: [
    PropertiesComponent,
  ],
  exports:[
    PropertiesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
  ]
})
export class PropertiesModule { }
