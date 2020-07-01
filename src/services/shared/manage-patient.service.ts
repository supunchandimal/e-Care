import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 

@Injectable({
  providedIn: 'root'
})
export class ManagePatientService {

  constructor(public firestore: AngularFirestore) { }

  get_Allpatients(){
    return this.firestore.collection('Users',ref=>ref.where('role','==','patient')).snapshotChanges();
  }

  delete_patient(record_id){
    this.firestore.doc('Users/'+record_id).delete();
  }
}
