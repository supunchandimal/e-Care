import { Injectable } from '@angular/core';
import { Announcement } from './announcement';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { log } from 'console';
import { Observable } from 'rxjs';
import { threadId } from 'worker_threads';
import { ActivationStart } from '@angular/router';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AdminAnnouncementService {
  announcement = new Announcement();
  status:number;
  collection:AngularFirestoreCollection<Announcement>;
  announcements:Observable<Announcement[]>
 constructor(private db:AngularFirestore) { 
   this.collection= db.collection<Announcement>('announcement');
   this.announcements= this.collection.snapshotChanges().pipe(
     map(
       actions=>actions.map(
         a=>{
           const data = a.payload.doc.data() as Announcement;
           return data;
         }
       )
     )
   )
  }
  
  send(announcement:Announcement){
    this.announcement = announcement;
    this.db.collection("announcement").add({
      subject :this.announcement.subject,
      audience : this.announcement.audience,
      message: this.announcement.message

    }).then(()=>{
      console.log("done")
      this.status=1;
    }).catch(function(error){
      console.error("ERROR",error);
      this.status=2;
    })

    return this.status
  }


  getannouncement(){
    return this.announcements;
  }
}
