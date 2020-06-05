import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UpdateProfileService {

  constructor( public fireservice : AngularFirestore ) { }

  createDoctor( Record ){
    return this.fireservice.collection('temp').add(Record);
  }

  getAllDoctor (){
    return this.fireservice.collection('temp').snapshotChanges();
  }

  updateDoctor (recordid, record){
    this.fireservice.doc('temp/' + recordid).update(record);
     
  }


  }


