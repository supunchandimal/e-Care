import { map } from 'rxjs/operators';
import { Cond } from './../../models/cond';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ConditionsService {
  private authState: Observable<firebase.User>;
  CondCollection: AngularFirestoreCollection<Cond>;
  Conds:Observable<Cond[]>;
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

    this.CondCollection = this.afsal.collection('Conds');

    this.Conds=this.afsal.collection('Conds').snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as Cond
        data.id = a.payload.doc.id;
        return data;
      });
    }));
   }
   
   
   getAlegs(){
     console.log(this.currentUser.uid)
     return this.afsal.collection('Conds', ref => ref.where('id', '==', this.currentUser.uid));
   }

   addItem(item:Cond){
    return this.CondCollection.add(item);
  }
   
}
