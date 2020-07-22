import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Files } from '../files';
import { map } from 'rxjs/operators'
import { AngularFireAuth } from '@angular/fire/auth';
export interface getfiles{
    downloadURL :string;
    path: string;
    uid:string ;
    date:string;
  
}

export interface getfilesid extends getfiles{
  key :string;
}

@Injectable({
  providedIn: 'root'
})
export class GetfilesService {
  
  Collection: AngularFirestoreCollection<getfiles>;

  allfiles: Observable<getfilesid[]>;
  private authState: Observable<firebase.User>;
  public currentUser: firebase.User;
  uid;
  constructor(  private db:AngularFirestore,private afAuth:AngularFireAuth ) {
    this.authState = this.afAuth.authState;
    this.authState.subscribe( async user => {
     
      if (user) {
        this.currentUser =  await user;
        this.uid= user.uid;
        console.log('AUTHSTATE USER =====', this.uid); 

      } else {
        console.log('AUTHSTATE USER EMPTY', user);
        this.currentUser = null;
      }

    },
    err => {
      console.log('Please try again')
    });

    if(1){
     this.Collection = db.collection<getfiles>('files',ref=>ref.where("uid","==",this.uid));
     //console.log(this.currentUser.uid);
     this.allfiles = this.Collection.snapshotChanges().pipe(
       map( actions =>actions.map( a =>{
         const data = a.payload.doc.data() as getfiles;
         const key = a.payload.doc.id;
         console.log(data);
         return{key ,...data};
       }

       ))
     )
      }
    }
    
 getfiles() {
  
  return this.allfiles;
  
}
}
