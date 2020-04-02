import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../volunteer/volunteer';
import { MatDialog } from '@angular/material/dialog';
import { CheckInPopupComponent } from '../check-in-popup/check-in-popup.component'

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

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CheckInPopupComponent, {
      width: '250px',
      data: {name: this.volunteer[1].name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

}
