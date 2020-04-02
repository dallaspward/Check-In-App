import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-check-in-popup',
  templateUrl: './check-in-popup.component.html',
  styleUrls: ['./check-in-popup.component.css']
})
export class CheckInPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CheckInPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
