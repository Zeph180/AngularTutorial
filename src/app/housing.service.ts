import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  //readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  url = 'http://localhost:3000/locations'
  constructor() { }

 async getHousingLocations(): Promise<HousingLocation[]> {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  // getHousingLocations(): HousingLocation[] {
  //   return this.housingLocationList;
  // }

  // getHousingLocationById(id: number): HousingLocation | undefined {
  //   return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  // }

  submitApplication(firstName: string, lastName: string, email: string){
    console.log(`Application received from ${firstName} ${lastName} at ${email}`);
  }
}
