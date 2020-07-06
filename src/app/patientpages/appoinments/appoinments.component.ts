import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject, combineLatest } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.component.html',
  styleUrls: ['./appoinments.component.css']
})
export class AppoinmentsComponent implements OnInit {
  searchterm: string;

  startAt = new Subject();
  endAt = new Subject();

  doc;
  docs;

  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();

  constructor(private afs: AngularFirestore) {

  }

  

  ngOnInit(): void {
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
}
