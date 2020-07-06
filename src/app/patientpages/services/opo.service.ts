import { map } from 'rxjs/operators';
import { Opo } from './../../models/opo';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class OpoService {
  private authState: Observable<firebase.User>;
  OpoCollection: AngularFirestoreCollection<Opo>;
  Ops:Observable<Opo[]>;
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

    this.OpoCollection = this.afsal.collection('Opo');

    this.Ops=this.afsal.collection('Opo').snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as Opo
        data.id = a.payload.doc.id;
        return data;
      });
    }));
   }
   
   
   getAlegs(){
     console.log(this.currentUser.uid)
     return this.afsal.collection('Opo', ref => ref.where('id', '==', this.currentUser.uid));
   }

   addItem(item:Opo){
    return this.OpoCollection.add(item);
  }
   
}
