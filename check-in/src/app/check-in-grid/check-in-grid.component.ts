import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../volunteer/volunteer';

@Component({
  selector: 'app-check-in-grid',
  templateUrl: './check-in-grid.component.html',
  styleUrls: ['./check-in-grid.component.css']
})
export class CheckInGridComponent implements OnInit {

  volunteer: Volunteer[] = [
    {id: 1, name: "Mario", isCheckedIn: false},
    {id: 2, name: "Luigi", isCheckedIn: false},
    {id: 3, name: "Peach", isCheckedIn: false},
    {id: 4, name: "Daisy", isCheckedIn: false},
    {id: 5, name: "Wario", isCheckedIn: false},
    {id: 6, name: "Waluigi", isCheckedIn: false},
    {id: 7, name: "David Ward", isCheckedIn: false}
  ];

  constructor() { }

  ngOnInit() {
  }

}
