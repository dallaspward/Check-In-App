import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-check-in-popup',
  templateUrl: './check-in-popup.component.html',
  styleUrls: ['./check-in-popup.component.css']
})
export class CheckInPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<CheckInPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: 'Hi'
  ) { }

}
