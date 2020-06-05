import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { Contactmessages } from './contactmessages';
import { storage } from 'firebase';
import { userInfo } from 'os';
import { map } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class GetfeedbacksService {

  Collection: AngularFirestoreCollection<Contactmessages>;
  contactmessages:Observable<Contactmessages[]>
  
  constructor(  private db:AngularFirestore) {
     this.Collection = db.collection<Contactmessages>('contactus_messages',ref=>ref.where("delete_or_not","==",0).orderBy('date',"desc").orderBy('mark',"asc"));
     this.contactmessages =this.Collection.snapshotChanges().pipe(
       map(actions =>actions.map(a =>{
         const data = a.payload.doc.data() as Contactmessages;
         const key = a.payload.doc.id;
         console.log(key);
         return{key ,...data};
       }

       ))
     )
    
    }
    

getfeedbacks(){
  return this.contactmessages;

}
deletefeedback(key){
  try{
    this.Collection.doc(key).update(
      {delete_or_not:1}
    )
  }catch(error_msg){
    console.log("fucked")
  };
}

deleteall(listall:Contactmessages[]){

  for(let i=0; i<listall.length;i++){
    
    this.deletefeedback(listall[i].key)
  }
}

markfeedback(key){
  try{
    this.Collection.doc(key).update(
      {mark:1}
    )
  }catch(error_msg){

  }
}

}
