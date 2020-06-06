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


  }


