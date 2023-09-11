import { Component, OnInit } from '@angular/core';
import { PropertiesLocation } from 'src/app/interfaces/propertieslocation';
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit{
  property: PropertiesLocation | undefined;

  constructor(
    private route: ActivatedRoute,
    private propertiesService: PropertiesService
  ) {
    this.property = undefined;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const propertyDbId = params['db_id']; 
      this.propertiesService.getProperty(propertyDbId).subscribe(
        property => {
          this.property= property
        }
      )
    });
  }

  returnDetails(propertiesLocation: PropertiesLocation[], propertyDbId: string) {
    const property = propertiesLocation.find(prop => prop.db_id === propertyDbId);
    if (property) {
      this.property = property;
    } else {
      console.log(`Property with ID ${propertyDbId} not found.`);
    }
  }
}