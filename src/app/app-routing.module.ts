import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { PropertiesComponent } from './Components/properties/properties.component';
import { HomeDetailsComponent } from './Components/home-details/home-details.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { DetalhesComponent } from './Components/detalhes-properties/detalhes.component';


const routes: Routes = [ 
{ path: '', component: HomeComponent },
{ path: 'properties', component: PropertiesComponent },
{ path: 'contatos', component: ContactsComponent },
{ path: 'details/:id', component: HomeDetailsComponent},
{path: 'detalhes/:db_id', component: DetalhesComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule {
  
 }
