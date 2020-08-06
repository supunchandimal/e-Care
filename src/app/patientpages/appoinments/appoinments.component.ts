import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Subject, combineLatest, Observable, observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Time } from 'src/app/models/time';
import { Appoinments } from 'src/app/models/appoinments';
import { map } from 'rxjs/operators';
import { AppoinmentsService } from '../services/appoinments.service';
@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.component.html',
  styleUrls: ['./appoinments.component.css']
})
export class AppoinmentsComponent implements OnInit {
  Times: Observable<Time[]>;
  Appoinment: Observable<Appoinments[]>;
  item: Appoinments = {
    id: '',
    docNic: '',
    userId: '',
    date: '',
    time: '',
    timestamp: null,
    channelID: ''
  }
  mark = 1;
  @ViewChild('secondDialog') secondDialog: TemplateRef<any>;
  searchterm: string;
  flag = 6;
  startAt = new Subject();
  endAt = new Subject();
  free;
  doc;
  docs;
  times;
  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();
  private authState: Observable<firebase.User>;
  public currentUser: firebase.User;
  user: firebase.User;
  Timedoc: AngularFirestoreDocument<Time>;
  TimeCollection: AngularFirestoreCollection<Time>;
  constructor(public afs: AngularFirestore, private dialog: MatDialog, private auth: AuthService, private afAuth: AngularFireAuth, private appoinmentService: AppoinmentsService) {
    this.authState = this.afAuth.authState;
  }

  ngOnInit(): void {
    this.TimeCollection = this.afs.collection('freetimes');
    this.Times = this.TimeCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Time
        data.id = a.payload.doc.id;
        return data;

      });
    }));
    this.auth.getUserState()
      .subscribe(user => {
        this.user = user;
      });
    this.authState.subscribe(user => {

      if (user) {
        this.currentUser = user;
        console.log('AUTHSTATE USER', user.uid);


        combineLatest(this.startobs, this.endobs).subscribe((value) => {
          this.getalldocs(value[0], value[1]).subscribe((docs) => {
            this.docs = docs;
          })
        })
        combineLatest(this.startobs, this.endobs).subscribe((value) => {
          this.firequery(value[0], value[1]).subscribe((docs) => {

            this.doc = docs;
          })
        })

        //this works

      } else {
        console.log('AUTHSTATE USER EMPTY', user);
        this.currentUser = null;
      }

    },
      err => {
        console.log('Please try again')
      });

  }
  search($event) {
    let q = $event.target.value;
    if (q != '') {
      this.startAt.next(q);
      this.endAt.next(q + "\uf8ff");
    }
  }
  firequery(start, end) {
    return this.afs.collection('doctors', ref => ref.limit(100).orderBy('speciality').startAt(start).endAt(end)).valueChanges();
  }
  getalldocs(start, end) {
    return this.afs.collection('doctors', ref => ref.limit(100).orderBy('fullName').startAt(start).endAt(end)).valueChanges();
  }
  getfreetime() {
    return this.afs.collection('freetimes').valueChanges();
  }

  openOtherDialog(docNIC) {
    this.dialog.open(this.secondDialog);
    this.afs.collection('freetimes', ref => ref.where('nic', '==', docNIC)).valueChanges()
      .subscribe(output => {
        this.times = output;
      })
  }
  Onfree(event, time) {
    this.mark = 2;
    this.Timedoc = this.afs.doc(`freetimes/${time.id}`);
    console.log(time.nic);
    this.Timedoc.update({
      status: 'booking'
    })
  }
  Onpay(event, time) {
    this.mark = 1;
    this.Timedoc = this.afs.doc(`freetimes/${time.id}`);
    console.log(time.nic);
    this.Timedoc.update({
      status: 'booked'
    })
    const current = new Date();

    current.setHours(0)

    current.setMinutes(0)

    current.setSeconds(0)

    current.setMilliseconds(0)

    const timestamp = current.getTime();
    this.item.timestamp = timestamp;
    this.item.userId = this.currentUser.uid;
    this.item.id = time.id;
    this.item.docName = time.docName;
    this.item.docNic = time.nic;
    this.item.date = time.date;
    this.item.time = time.time;
    let channelID = time.date+"_"+this.currentUser.uid+"_"+time.nic;
    console.log(channelID)
    this.item.channelID = channelID;
    this.appoinmentService.addItem(this.item);


  }
  Oncancel(event, time) {
    this.mark = 1;
    this.Timedoc = this.afs.doc(`freetimes/${time.id}`);
    console.log(time.nic);
    this.Timedoc.update({
      status: 'free'
    })
  }


}
