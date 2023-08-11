import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)"> Search </button>
      </form>
    </section>

    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredHousingLocationList"
          [housingLocation]="housingLocation">
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredHousingLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredHousingLocationList = housingLocationList;
    });
  }

  filterResults(value: string):void {
    if(value==="") 
      this.filteredHousingLocationList=this.housingLocationList;

    this.filteredHousingLocationList = this.housingLocationList.filter((location) => {
      let city:string = location.city
      console.log(location.city, value.toLowerCase(), city.toLowerCase().includes(value.toLowerCase()))
      return city.toLowerCase().includes(value.toLowerCase())
    })

    console.log(this.filteredHousingLocationList)
  }
}
