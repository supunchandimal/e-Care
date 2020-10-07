import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PatientHealthHistoryService {

  constructor(public fireservice : AngularFirestore) { }

  addBehavirol(Record){
    return this.fireservice.collection('HealthRecord').add(Record);
  }

  addfamily(Record){
    return this.fireservice.collection('HealthRecord').add(Record);
  }

}
