import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Location } from '../../models/location';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.css']
})
export class LocationInfoComponent implements OnInit {
  location: Location;

  constructor(public dialogRef: MatDialogRef<LocationInfoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Location) {
    this.location = data;
  }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close(this.location);
  }

  cancel() {
    this.dialogRef.close();
  }
}
