import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-dogdialog',
  templateUrl: './dogdialog.component.html',
  styleUrls: ['./dogdialog.component.scss']
})
export class DogDialogComponent implements OnInit {

  public message;

  constructor(
    public dialogRef: MatDialogRef<DogDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  buttonRouter(name) {
    if (name === 'add') {
      if (this.data.dogid && this.data.name && this.data.breed && this.data.gender) {
        this.data.function = name;
        this.dialogRef.close(this.data);
      } else {
        this.message = 'All required fields must be completed';
      }
    } else if (name === 'delete') {
      this.data.function = name;
      this.dialogRef.close(this.data);

    } else {
      this.data.function = name;
      if (this.data.dogid && this.data.name && this.data.breed && this.data.gender) {
        this.data.function = name;
        this.dialogRef.close(this.data);
      } else {
        this.message = 'All required fields must be completed';
      }
    }
  }
}
