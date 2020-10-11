import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AppointmentScheduleService {
  currentUserID: string;

<<<<<<< HEAD
  constructor(
    public fireservice : AngularFirestore,
    ) {
      this.currentUserID = localStorage.getItem('currentUserID');
     }
=======
  constructor( public fireservice : AngularFirestore ) {
    this.currentUserID = localStorage.getItem('currentUserID');
  }
>>>>>>> b6e3c3d0968bec5c3c5abba7f9e7bb257be0b2a8


  add(Record)
  {
    return this.fireservice.collection('appointmentSchedule').add(Record);
  }

  getSchedule(date)
  {
<<<<<<< HEAD
    return this.fireservice.collection('freetimes', ref=>ref.where("docid","==",this.currentUserID).where( "date","==",date).orderBy('time')).snapshotChanges();
=======
    return this.fireservice.collection('freetimes', ref=>ref.where("docid","==",this.currentUserID).where("date","==",date).orderBy('time')).snapshotChanges();
  }

  getBookedAppointments(date)
  {
    return this.fireservice.collection('freetimes', ref=>ref.where("docid","==",this.currentUserID).where("date","==",date).orderBy('time')).snapshotChanges();
>>>>>>> b6e3c3d0968bec5c3c5abba7f9e7bb257be0b2a8
  }
  
  updateSchedule(recordid, record)
  {
    this.fireservice.doc('appointmentSchedule/' + recordid).update(record);
  }

  updateFreetimes(data){
    this.fireservice.collection('freetimes').add(data);
  }


}


