import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../volunteer/volunteer';

@Component({
  selector: 'app-check-in-grid',
  templateUrl: './check-in-grid.component.html',
  styleUrls: ['./check-in-grid.component.css']
})
export class CheckInGridComponent implements OnInit {

  volunteer: Volunteer[] = [
    {id: 1, name: "Mario"},
    {id: 2, name: "Luigi"},
    {id: 3, name: "Peach"},
    {id: 4, name: "Daisy"},
    {id: 5, name: "Wario"},
    {id: 6, name: "Waluigi"},
    {id: 7, name: "David Ward"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
