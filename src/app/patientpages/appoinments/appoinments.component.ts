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

interface InputData {
  name: string
  value: string
}

interface FormInputData {
  inputData: Array<InputData>
}

@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.component.html',
  styleUrls: ['./appoinments.component.css']
})
export class AppoinmentsComponent implements OnInit {
  selectedOption: string;
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
  currentPatientData: any;
  allDocData: any[];
  searchValue: any;
  constructor(public afs: AngularFirestore, private dialog: MatDialog, private auth: AuthService, private afAuth: AngularFireAuth, private appoinmentService: AppoinmentsService) {
    this.authState = this.afAuth.authState;
  }

  ngOnInit(): void {
    // this.TimeCollection = this.afs.collection('doctors');
    // this.Times = this.TimeCollection.snapshotChanges().pipe(map(changes => {
    //   return changes.map(a => {
    //     const data = a.payload.doc.data() as Time
    //     data.id = a.payload.doc.id;
    //     return data;

    //   });
    // }));
    this.afs.collection('doctors').valueChanges()
      .subscribe(output => {
        this.allDocData = output;
      });
    this.auth.getUserState()
      .subscribe(user => {
        this.user = user;
      });
    this.authState.subscribe(user => {

      if (user) {
        this.currentUser = user;
        console.log('AUTHSTATE USER', user.uid);

        this.afs.collection('Users').doc(this.currentUser.uid).valueChanges()
          .subscribe(res => {
            this.currentPatientData = res;
            console.log("current patient data - ", this.currentPatientData);
          })


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

  filterSpeciality() {
    console.log("selected filter option - ", this.selectedOption);
    if (this.selectedOption == "All") {
      this.afs.collection('doctors').valueChanges()
        .subscribe(output => {
          this.allDocData = output;
        });
    }
    else {
      this.afs.collection('doctors', ref => ref.where('speciality', '==', this.selectedOption)).valueChanges()
        .subscribe(output => {
          this.allDocData = output;
        })
    }
  }
  
  search($event) {
    let q = $event.target.value;
    if (q != '') {
      this.startAt.next(q);
      this.endAt.next(q + "\uf8ff");
    }
  }

  searchByName() {
    let value = this.searchValue;
    this.appoinmentService.searchUsers(value).subscribe(result => {
      // this.name_filtered_items = result;
      this.allDocData = result;
      // this.items = this.combineLists(result, this.age_filtered_items);
    });
  }

  filterBySpeciality(speciality) {
    this.afs.collection("doctors", (ref) => (ref.where("speciality", "==", speciality))).valueChanges()
      .subscribe(result => {
        this.allDocData = result;
        // console.log(this.items);
      })

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
    let channelID = time.date + "_" + this.currentUser.uid + "_" + time.nic;
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

  doPayment() {
    const data = new Array<InputData>()
    data.push({ name: 'merchant_id', value: "1215308" })
    data.push({ name: 'return_url', value: "http://localhost:4200/book" })
    data.push({ name: 'cancel_url', value: "http://localhost:4200/payment-failed" })
    data.push({ name: 'notify_url', value: "https://us-central1-e-care-96a24.cloudfunctions.net/paymentStatus" })
    data.push({ name: 'first_name', value: this.currentPatientData.firstname })
    data.push({ name: 'last_name', value: this.currentPatientData.lastname })
    data.push({ name: 'email', value: this.currentPatientData.email })
    data.push({ name: 'phone', value: this.currentPatientData.phone })
    data.push({ name: 'address', value: "enterAProperAddress" })
    data.push({ name: 'city', value: "enterACity" })
    data.push({ name: 'country', value: "Sri Lanka" })
    data.push({ name: 'order_id', value: "noOrderID" })
    data.push({ name: 'items', value: "noItems" })
    data.push({ name: 'currency', value: "LKR" })
    data.push({ name: 'amount', value: "900" })
    data.push({ name: 'custom_1', value: "cust1" })
    data.push({ name: 'custom_2', value: "cust2" })
    // data.push({ name: 'hash', value: `${pd.hash}` })

    // this.payNow();

    const form = this.createForm({ inputData: data })
    // You have to create hidden(style="display:none") div element with this "submit-form-container" id (id="submit-form-container") in the component
    // <div style="display:none" id="submit-form-container"></div>
    document.querySelector('#submit-form-container').appendChild(form)
    form.submit()
  }


  createForm(data: FormInputData): HTMLFormElement {
    const form: HTMLFormElement = document.createElement('form')
    form.setAttribute('action', `https://sandbox.payhere.lk/pay/checkout`)
    form.setAttribute('method', 'POST')

    form.append(
      ...data.inputData.map((d) => {
        return this.createInput(d)
      })
    )

    return form
  }

  createInput(data: InputData): HTMLInputElement {
    const input = document.createElement('input')
    input.setAttribute('type', 'hidden')
    input.setAttribute('name', `${data.name}`)
    input.setAttribute('value', `${data.value}`)
    return input
  }

  // payNow(){

  //   var appointmentDatex = this.datePipe.transform(this.selectedAppointmentDate, "yyyy-MM-dd");
  //   console.log("results from paynow() - ",this.results);
  //   if (this.results.role == 'doctor'){
  //     this.currentUserID = this.results.doctorID;

  //   }
  //   else if(this.results.role == 'patient'){
  //     this.currentUserID = this.results.patientID;
  //   }    
  //   var data = {
  //     appointmentID:this.appointmentID,
  //     patientID:this.currentUserID,
  //     patientName:this.results.name,
  //     doctorID:this.data.doctorID,
  //     doctorName:this.data.name,
  //     appointmentDate:new Date(this.selectedAppointmentDate),
  //     doctorProPic:this.data.proPicURL,
  //     appointmentTime:this.finalEstimatedAppointmentTime,
  //     totalFee:this.totalFee,
  //     appointmentShortDate:this.appointmentShortDate,
  //     appointmentNo:this.appointmentsCount,
  //     doctorSpeciality:this.data.speciality,
  //     consultationStarted:"false",
  //     availabilityStatus:'Absent',
  //     paymentStatus:'Pending',
  //     status:'Active'
  //   }    

  //   this.db.collection('Appointments').doc(this.appointmentID).set(data)
  //   .then(()=>{
  //     console.log("successfully updated - Appointments")
  //     this.db.collection('Users').doc(localStorage.getItem("selectedDocID")).collection('appointmentCounts').doc(this.datePipe.transform(this.selectedAppointmentDate, "yyyy-MM-dd")).set({
  //       patientsCount:this.appointmentsCount
  //     }).then(()=>{
  //       console.log("successfully updated - doctor appointments count")
  //     });
  //   });


  //   // this.db.collection('Users').doc(localStorage.getItem('uid')).collection('Appointments').doc(this.appointmentID).set(data)
  //   // .then(()=>{
  //   //   console.log("successfully updated - patient Appointments")
  //   // })

  //   this.db.collection('Users').doc(localStorage.getItem('selectedDocID')).collection('Appointments').doc(appointmentDatex.toString()).collection('dayAppointments').doc(this.appointmentID).set(data)
  //   .then(()=>{
  //     console.log("successfully updated - doctor Appointments")
  //   })

  //   console.log("data to be saved from paynow() - ",data);
  // }


}
