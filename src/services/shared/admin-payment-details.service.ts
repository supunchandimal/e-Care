import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 


@Injectable({
  providedIn: 'root'
})
export class AdminPaymentDetailsService {

  constructor(public firestore: AngularFirestore) { }


  get_AppPrice(){
    return this.firestore.collection('Appoinments').snapshotChanges();
  }
}

