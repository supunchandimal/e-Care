import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AppointmentScheduleService {

  constructor( public fireservice : AngularFirestore ) { }


  // create_Newemployee(Record)
  // {
  //   return this.fireservice.collection('hiiii').add(Record);
  // }

  getSchedule()
  {
    return this.fireservice.collection('hiii', ref=>ref.where("doctorID","==",1).where( "tt","==","fuck") ).snapshotChanges();
  }
  
  updateSchedule(recordid, record)
  {
    this.fireservice.doc('hiii/' + recordid).update(record);
  }


}


