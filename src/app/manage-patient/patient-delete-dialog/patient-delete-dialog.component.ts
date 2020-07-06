import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef} from  '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-patient-delete-dialog',
  templateUrl: './patient-delete-dialog.component.html',
  styleUrls: ['./patient-delete-dialog.component.css']
})
export class PatientDeleteDialogComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data, public dialogRef:MatDialogRef<PatientDeleteDialogComponent>) { }

  ngOnInit(): void {
  }

closeDialog(){
  this.dialogRef.close(false);
}
}
