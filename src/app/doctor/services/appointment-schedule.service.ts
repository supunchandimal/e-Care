import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AppointmentScheduleService {
  currentUserID: string;

  constructor( public fireservice : AngularFirestore ) {
    this.currentUserID = localStorage.getItem('currentUserID');
  }


  add(Record)
  {
    return this.fireservice.collection('appointmentSchedule').add(Record);
  }

  getSchedule(date)
  {
    return this.fireservice.collection('freetimes', ref=>ref.where("docid","==",this.currentUserID).where("date","==",date).orderBy('time')).snapshotChanges();
  }

  getBookedAppointments(date)
  {
    return this.fireservice.collection('freetimes', ref=>ref.where("docid","==",this.currentUserID).where("date","==",date).orderBy('time')).snapshotChanges();
  }
  
  updateSchedule(recordid, record)
  {
    this.fireservice.doc('appointmentSchedule/' + recordid).update(record);
  }

  updateFreetimes(data){
    this.fireservice.collection('freetimes').add(data);
  }


}


