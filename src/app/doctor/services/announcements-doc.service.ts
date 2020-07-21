import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsDocService {

  constructor(public fireservices:AngularFirestore) { }

  SendAnnouncement(Record)
  {
    return this.fireservices.collection('announcement').add(Record);
  }

  GetSentAnnouncement()
  {
    return this.fireservices.collection('announcement', ref=>ref.where("sentby","==",'D01')).snapshotChanges();
  }

  GetReceivedAnnouncement()
  {
    return this.fireservices.collection('announcement', ref=>ref.where("audience","==",'doctors')).snapshotChanges();
  }
}
