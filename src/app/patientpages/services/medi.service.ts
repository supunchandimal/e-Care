import { map } from 'rxjs/operators';
import { Meds } from './../../models/medi';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class MediService {
  private authState: Observable<firebase.User>;
  MedCollection: AngularFirestoreCollection<Meds>;
  Meds:Observable<Meds[]>;
  public currentUser: firebase.User;

  constructor( private afAuth:AngularFireAuth,public afsal:AngularFirestore) {
    this.authState = this.afAuth.authState;

    this.authState.subscribe(user => {
      if (user) {
        this.currentUser = user;
        console.log('AUTHSTATE USER', user.uid); //this works
        
      } else {
        console.log('AUTHSTATE USER EMPTY', user);
        this.currentUser = null;
      }
    },
    err => {
      console.log('Please try again')
    });

    this.MedCollection = this.afsal.collection('Meds');

    this.Meds=this.afsal.collection('Meds').snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as Meds
        data.id = a.payload.doc.id;
        return data;
      });
    }));
   }
   
   
   getAlegs(){
     console.log(this.currentUser.uid)
     return this.afsal.collection('Meds', ref => ref.where('id', '==', this.currentUser.uid));
   }

   addItem(item:Meds){
    return this.MedCollection.add(item);
  }
   
}