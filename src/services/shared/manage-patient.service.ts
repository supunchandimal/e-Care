import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 

@Injectable({
  providedIn: 'root'
})
export class ManagePatientService {

  constructor(public firestore: AngularFirestore) { }

  get_Alldoctors(){
    return this.firestore.collection('Users').snapshotChanges();
  }


}
