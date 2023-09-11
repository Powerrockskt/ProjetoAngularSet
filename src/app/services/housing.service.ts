import { Injectable } from '@angular/core';
import { HousingLocation } from '../interfaces/housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  private storage: Storage; 

  url = 'https://imobz.in/Gt513FMR_properties';

  constructor() {
    this.storage= window.localStorage;
  }

  async getAllHousingLocations(): Promise<HousingLocation[]>{
    const data = await fetch(this.url);

    return await data.json() ?? [];

  }

  async getHousingLocationById(id: number, housingLocationList: HousingLocation[]): Promise<HousingLocation | undefined>{
    let housingLocation: HousingLocation | undefined;
    if(housingLocationList){
      housingLocation = housingLocationList.find((housingLocation : HousingLocation) => housingLocation.id === id);
    }
    return housingLocation;
  }

  submitApplication(contact: any){
    let contatoJson = {
      "firstName": contact.firstName,
      "lastName": contact.lastName,
      "email": contact.email,
      "property": [contact.property],
    };

    let contatos: any[] = [];

    if(this.storage){
        let contato = localStorage.getItem('contact');

        contatos = contato ? JSON.parse(contato) : [];
        if(contatos){
          let item: any = contatos.find(contactItem => contactItem.email == contatoJson.email);
          if(item && item.property){
            let property = item.property.find((propertyItem: any) => propertyItem.id == contact.property.id);
            if(!property ){
              item.property.push(contact.property)
            }
          } else if(!item){
            contatos.push(contatoJson);
          }

        }
        localStorage.setItem('contact', JSON.stringify(contatos));
    } else {
      contatos.push(contatoJson);
      localStorage.setItem('contact', JSON.stringify(contatos));
    }
  }
}
