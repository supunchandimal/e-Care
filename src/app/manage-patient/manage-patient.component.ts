import { Component, OnInit } from '@angular/core';
import { ManagePatientService } from 'src/services/shared/manage-patient.service';
import { AngularFirestore } from '@angular/fire/firestore'; 
import { MatDialog, MatDialogConfig } from  '@angular/material/dialog';
import { PatientDeleteDialogService } from 'src/services/shared/patient-delete-dialog.service';

@Component({
  selector: 'app-manage-patient',
  templateUrl: './manage-patient.component.html',
  styleUrls: ['./manage-patient.component.css']
})
export class ManagePatientComponent implements OnInit {
  patient: any;
  constructor(public PatientService: ManagePatientService, public firestore: AngularFirestore, private dialog: MatDialog, private DialogService: PatientDeleteDialogService) { }

  ngOnInit(): void {
    this.PatientService.get_Allpatients().subscribe(data => {

      this.patient=data.map(e=> {
        return{
          id: e.payload.doc.id,
          firstname: e.payload.doc.data()['firstname'],
          email: e.payload.doc.data()['email'],
          phone: e.payload.doc.data()['phone'],
          // age: e.payload.doc.data()['age'],
          // city: e.payload.doc.data()['city'],
          gender: e.payload.doc.data()['gender'],
          // speciality: e.payload.doc.data()['speciality'],
        };
      })
      console.log(this.patient);
    })
    
  } 
  // DeleteDoctor(record_id){
  //   this.PatientService.delete_patient(record_id);
  // }

  DeleteDoctor(record_id){
   this.DialogService.openConfirmDialog('Are you sure you want to delete this record?')
   .afterClosed().subscribe(res=>{
    //  console.log(res);
    if(res){
      this.PatientService.delete_patient(record_id);
    }
    
   });

  }
    
  }
