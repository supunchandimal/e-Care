import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from  '@angular/material/dialog';
import { PatientDeleteDialogComponent } from 'src/app/manage-patient/patient-delete-dialog/patient-delete-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class PatientDeleteDialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg){
   return this.dialog.open(PatientDeleteDialogComponent,{
      width:'390px',
      panelClass:'confirm-dialog-container',
      disableClose:true,
      position:{top: "10px"},
      data:{
        message:msg
      }
    });
  }
}
