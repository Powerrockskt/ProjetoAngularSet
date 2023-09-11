import { Component,Input } from '@angular/core';
import { HousingLocation } from '../../interfaces/housinglocation';

@Component({
  selector: 'app-housinglocation',
  templateUrl: './housinglocation.component.html',
  styleUrls: ['./housinglocation.component.css']
})
export class HousinglocationComponent {
  @Input() housingLocation!: HousingLocation;


}
