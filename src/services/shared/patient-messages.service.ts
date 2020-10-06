import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PatientMessagesService {

  constructor(public fireservices:AngularFirestore) { }
  GetReceivedAnnouncement()
  {
    return this.fireservices.collection('announcement', ref=>ref.where("audience","==",'customers')).snapshotChanges();
  }
}
