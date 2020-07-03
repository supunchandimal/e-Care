import { Alleg } from './../../models/allergie';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private authState: Observable<firebase.User>;
  AllegCollection: AngularFirestoreCollection<Alleg>;
  Allegs:Observable<Alleg[]>;
  Allegdoc : AngularFirestoreDocument<Alleg>;
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
    this.AllegCollection = this.afsal.collection('Allegs');

    this.Allegs=this.afsal.collection('Allegs').snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as Alleg
        data.id = a.payload.doc.id;
        return data;
      });
    }));
   }

   getAlegs(){
    return this.afsal.collection('Allegs', ref => ref.where('id', '==', this.currentUser.uid).orderBy('name','asc'));
   }

   addItem(item:Alleg){
    return this.AllegCollection.add(item);
  }

  deleteItem(item : Alleg){
    console.log('hii');
    this.Allegdoc = this.afsal.doc(`Allegs/${item.id}`);
    this.Allegdoc.delete();
  }
   
}
