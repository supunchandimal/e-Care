import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UpdateProfileService {

  constructor( public fireservice : AngularFirestore ) { }



  getDoctor()
  {
    return this.fireservice.collection('hii', ref=>ref.where("docID","==",1)).snapshotChanges();
  }

  getDoctorData()
  {
    return this.fireservice.collection('Users').doc(localStorage.getItem('currentUserID')).valueChanges();
  }

  updateDoctor(recordid, record)
  {
    this.fireservice.doc('hii/' + recordid).update(record);
  }





  }


