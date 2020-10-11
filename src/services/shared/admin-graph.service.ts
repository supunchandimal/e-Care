import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 


@Injectable({
  providedIn: 'root'
})
export class AdminGraphService {

  constructor(public firestore: AngularFirestore) { }

  // get_CountDoc(){
    // return this.firestore.collection('Users',ref=>ref.where('role','==','patient')).snapshotChanges();
  //   return this.firestore.collection('doctors').get().then(snap => {
  //     size = snap.size // will return the collection size
  //  });
  // }
  get_AllDocCount(){
  //   return this.firestore.collection('doctors').get() .toPromise().then(snap => {
  //     const size = snap.size 
  //  });
//  return this.firestore.collection('doctors').valueChanges(). subscribe( values =>
//       console.log(values.length)  
//     );

}
}