import { Rec } from './../../models/healthpro';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class HealthproService {
  private authState: Observable<firebase.User>;
  RecCollection: AngularFirestoreCollection<Rec>;
  Recs:Observable<Rec[]>;
  public currentUser: firebase.User;
  constructor(private afAuth:AngularFireAuth,public afsal:AngularFirestore) { 
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
    this.RecCollection = this.afsal.collection('Healthpro');

    this.Recs=this.afsal.collection('Healthpro').snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as Rec
        data.id = a.payload.doc.id;
        return data;
      });
    }));
   }

   getAlegs(){
     return this.afsal.collection('Healthpro');
   }
   
   addItem(item:Rec){
    return this.RecCollection.doc(`${this.currentUser.uid}`).set(item);
  }
  }

 

