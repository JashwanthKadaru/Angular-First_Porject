import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Booking } from './booking';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  readonly geturl: string = 'http://localhost:3000/Bookings';
  
  constructor(private http: HttpClient ) { }

  async getAllBookings() : Promise<Booking[]> {
    const data = await fetch(this.geturl)
    return await data.json() ?? [];
  }

  removeBooking(id:number) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'})

    const url = `${this.geturl}/${id}`; 
    return this.http.delete(url, {headers})
  }
}
