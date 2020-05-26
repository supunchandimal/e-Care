import { Alleg } from './../../models/allergie';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  AllegCollection: AngularFirestoreCollection<Alleg>;
  Allegs:Observable<Alleg[]>;

  constructor(public afsal:AngularFirestore) {
    this.AllegCollection = this.afsal.collection('Allegs');

    this.Allegs=this.afsal.collection('Allegs').valueChanges();
   }

   getAlegs(){
     return this.Allegs;
   }

   addItem(item:Alleg){
    return this.AllegCollection.add(item);
  }
   
}
