import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="admin">
      <h1> List of Bookings </h1>
      
      <p id="length"> Total bookings requested : {{bookingsList.length}}</p>
      <ol>
        <li *ngFor="let booking of bookingsList" > 
        
        <p class='fname'> <span>Customer FirstName:</span> {{booking.firstName}} <p>
        <p class='lname'> <span>Customer LastName:</span>{{booking.lastName}} <p>
        <p class='email'> <span>Customer email:</span> {{booking.email}} <p> 

        <button (click)="onRemove(booking.id)"> Remove </button>
        </li>
      </ol>

    </div>
  `,
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  bookingsList: Booking[] = [];

  bookingService: BookingService = inject(BookingService)
  
  constructor() {
    this.bookingService.getAllBookings().then((bookingsList:Booking[]) => {this.bookingsList = bookingsList}).catch((error) => {console.log(error)})
  }

  onRemove(id: number) {
    console.log("OnRemove")
    this.bookingService.removeBooking(id).subscribe(
      (response) => {
      console.log('Data deleted Successfully')
      }, 
    (error) => {console.log("Couldn't delete data", error)}
    )

    this.bookingService.getAllBookings().then((bookingsList:Booking[]) => {this.bookingsList = bookingsList; console.log("Fetched new data")}).catch((error) => {console.log(error)})
  }
}
