import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ManageDoctorService {

  constructor(public firestore: AngularFirestore) { }

// form: FormGroup =  new FormGroup({
//   $key : new FormControl(null),     //Prinamry key for the doctor
//   fullName: new FormControl(''),
//   email: new FormControl(''),
//   mobile: new FormControl(''),
//   city: new FormControl(''),
//   gender: new FormControl('1'),
//   department: new FormControl(0),
//   hireDate: new FormControl(''),
//   isPermanent: new FormControl(false)

// });

create_Newdoctor(Record){
  return this.firestore.collection('doctors').add(Record);
}

get_Alldoctors(){
  return this.firestore.collection('doctors').snapshotChanges();
}

update_doctor(recordid, record){
  this.firestore.doc('doctors/'+recordid).update(record);
}

delete_doctor(record_id){
  this.firestore.doc('doctors/'+record_id).delete();
}
}
