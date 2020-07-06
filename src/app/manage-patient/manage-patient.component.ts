import { Component, OnInit } from '@angular/core';
import { ManagePatientService } from 'src/services/shared/manage-patient.service';
import { AngularFirestore } from '@angular/fire/firestore'; 
import { MatDialog, MatDialogConfig } from  '@angular/material/dialog';
import { PatientDeleteDialogService } from 'src/services/shared/patient-delete-dialog.service';
import { Subject, combineLatest } from 'rxjs';
@Component({
  selector: 'app-manage-patient',
  templateUrl: './manage-patient.component.html',
  styleUrls: ['./manage-patient.component.css']
})
export class ManagePatientComponent implements OnInit {
  patient: any;
  searchterm: string;
  startAt = new Subject();
  endAt = new Subject();

  doc;
  docs;

  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();
 
  constructor(public PatientService: ManagePatientService, public firestore: AngularFirestore, private dialog: MatDialog, private DialogService: PatientDeleteDialogService) { }

  ngOnInit(): void {
    this.PatientService.get_Allpatients().subscribe(data => {

      this.patient=data.map(e=> {
        return{
          id: e.payload.doc.id,
          firstname: e.payload.doc.data()['firstname'],
          secondname: e.payload.doc.data()['secondname'],
          email: e.payload.doc.data()['email'],
          phone: e.payload.doc.data()['phone'],
          gender: e.payload.doc.data()['gender'],
        };
      })
      console.log(this.patient);
    })
    combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.getalldocs(value[0], value[1]).subscribe((docs) => {
        this.docs = docs;
      })
    })
    combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.firequery(value[0], value[1]).subscribe((docs) => {
        this.doc = docs;
      })
    })
    combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.secondname(value[0], value[1]).subscribe((docs) => {
        this.doc = docs;
      })
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
    }});
  }
    
  search($event) {
    let q = $event.target.value;
    if (q != '') {
      this.startAt.next(q);
      this.endAt.next(q + "\uf8ff");
    }
  }
  firequery(start, end) {
    return this.firestore.collection('Users', ref => ref.limit(100).orderBy('phone').startAt(start).endAt(end)).valueChanges();
  }
  getalldocs(start, end) {
    return this.firestore.collection('Users', ref => ref.limit(100).orderBy('firstname').startAt(start).endAt(end)).valueChanges();
  }
  secondname(start, end) {
    return this.firestore.collection('Users', ref => ref.limit(100).orderBy('secondname').startAt(start).endAt(end)).valueChanges();
  }



  }
