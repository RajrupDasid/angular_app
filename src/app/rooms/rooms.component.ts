import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  hotelname : string = "Experiment";
  roomsavailable: number = 10;
  hideRooms:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.hideRooms = !this.hideRooms;
  }
}
