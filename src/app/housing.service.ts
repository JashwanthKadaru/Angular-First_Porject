import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: HousingLocation[] = []
 
  geturl: string = 'http://localhost:3000/locations';
  posturl: string = 'http://localhost:3000/Bookings';
  
  constructor(private http: HttpClient ) { }

  async getAllHousingLocations() : Promise<HousingLocation[]> {
    const data = await fetch(this.geturl);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number) : Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.geturl}/${id}`);
    
    return data.json() ?? undefined;
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application recieved: firstName: ${firstName}, lastNmae: ${lastName}, email: ${email}.`);
  
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const data = { "firstName": firstName, "lastName":lastName, "email":email};
    return this.http.post(this.posturl, data, {headers})
  }

}
