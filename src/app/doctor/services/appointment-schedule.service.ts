import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AppointmentScheduleService {

  constructor( public fireservice : AngularFirestore ) { }


  add(Record)
  {
    return this.fireservice.collection('appointmentSchedule').add(Record);
  }

  getSchedule(date)
  {
    return this.fireservice.collection('appointmentSchedule', ref=>ref.where("doctorID","==",1).where( "date","==",date) ).snapshotChanges();
  }
  
  updateSchedule(recordid, record)
  {
    this.fireservice.doc('appointmentSchedule/' + recordid).update(record);
  }


}


