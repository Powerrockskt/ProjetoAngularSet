import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { HousingLocation } from 'src/app/interfaces/housinglocation';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})

export class HomeDetailsComponent implements OnInit{
  id: number;
  name: string;
  housingLocation: HousingLocation | undefined;
  public contacts: any[] = [];
 
  // criação do formulário
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });
    //trazer informações housing 
  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService) {
    this.name = "";
    this.id = parseInt(this.route.snapshot.params['id'], 10)
  }

  ngOnInit() {
    this.housingService.getAllHousingLocations().then(locations => {
      this.returnDetails(locations);
    });
  }

  returnDetails(housingLocations: HousingLocation[]) {
    this.housingService.getHousingLocationById(this.id, housingLocations).then(item => {
      this.housingLocation = item;
    })
  }

   // formulário para puxar os contatos 
  submitApplication() {
    let contact: any = {
      firstName: this.applyForm.value.firstName,
      email:this.applyForm.value.email,
      lastName: this.applyForm.value.lastName,
      property: this.housingLocation,
    }
    this.housingService.submitApplication(contact);
    this.applyForm.reset();
  }
}
