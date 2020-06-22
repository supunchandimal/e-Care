import { Component, OnInit } from '@angular/core';
import { ManagePatientService } from 'src/services/shared/manage-patient.service';
import { AngularFirestore } from '@angular/fire/firestore'; 
@Component({
  selector: 'app-manage-patient',
  templateUrl: './manage-patient.component.html',
  styleUrls: ['./manage-patient.component.css']
})
export class ManagePatientComponent implements OnInit {
  patient: any;
  constructor(public PatientService: ManagePatientService, public firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.PatientService.get_Alldoctors().subscribe(data => {

      this.patient=data.map(e=> {
        return{
          id: e.payload.doc.id,
          firstname: e.payload.doc.data()['firstname'],
          email: e.payload.doc.data()['email'],
          phone: e.payload.doc.data()['phone'],
          // age: e.payload.doc.data()['age'],
          // city: e.payload.doc.data()['city'],
          gender: e.payload.doc.data()['gender'],
          // speciality: e.payload.doc.data()['speciality'],
        };
      })
      console.log(this.patient);
    })
    // get_Alldoctors(){
    //   return this.firestore.pipe(
    //     map(Users=> Users.filter(Users=>Users.roles.patient===true))
    //   );
    // }

    }
    
    
  }


  // get_Alldoctors(){
  //   return this.firestore.pipe(
  //     map(Users=> Users.filter(Users=>Users.roles.patient===true))
  //   );
  // }