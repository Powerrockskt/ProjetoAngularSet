import { Component, OnInit } from '@angular/core';
import { HousingLocation } from '../../interfaces/housinglocation';
import { HomeService } from '../../services/home.service';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  constructor(private service: HousingService) {}

  ngOnInit() {
    this.service.getAllHousingLocations().then(locations => {
      this.housingLocationList = locations;
      this.filteredLocationList = locations;
    });
  }

  filterResults(text: string) {
    if (!text || !this.housingLocationList) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation =>
        housingLocation.city?.toLowerCase().includes(text.toLowerCase())
    );
  }
  
}
