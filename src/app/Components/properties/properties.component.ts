import { Component, Input, OnInit } from '@angular/core';
import { PropertiesLocation } from 'src/app/interfaces/propertieslocation';
import{PropertiesService} from '../../services/properties.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-properties',
  
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})

export class PropertiesComponent implements OnInit {
  properties: PropertiesLocation[] = [];
  teste: any
  propertiesCount:number=0;
  cursor: string | null = null;
  isLoading: boolean= false;

propertieslocation: any;
  constructor(private propertiesService: PropertiesService) {}

  ngOnInit() {
    this.loadProperties();
  }
  loadProperties() {
    this.isLoading = true;
    this.propertiesService.getAllPropertiesLocations(this.cursor).subscribe(
      response=> {
        this.properties = [... this.properties, ...response.properties];
        this.propertiesCount=response.count;
        this.cursor = response.cursor;
        this.isLoading= false;
      },
      error => {
        console.log(error);
        this.isLoading=false;
      }
    )
  }
}
