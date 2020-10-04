import { Component, OnInit } from '@angular/core';
import { ManageDoctorService } from 'src/services/shared/manage-doctor.service';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent implements OnInit {
  collections=["doctors","Users"];
  public genderList: string[];
  doctor: any;
  fullName: string;
  fullNameControl:String;
  emailControl:String;
  email:string;
  nic:string;
  age:number;
  city:string;
  gender:string;
  speciality:string;

  constructor(public DoctorService: ManageDoctorService, private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.DoctorService.get_Alldoctors().subscribe(data => {

      this.doctor=data.map(e=> {
        return{
          id: e.payload.doc.id,
          isedit: false,
          fullName: e.payload.doc.data()['fullName'],
          email: e.payload.doc.data()['email'],
          nic: e.payload.doc.data()['nic'],
          age: e.payload.doc.data()['age'],
          city: e.payload.doc.data()['city'],
          gender: e.payload.doc.data()['gender'],
          speciality: e.payload.doc.data()['speciality'],
        };
      })
      console.log(this.doctor);
    })
    
  }
  
EditRecord(Record){
  Record.isedit = true;
  Record.editname = Record.fullName;
  Record.editage=Record.age;
  Record.editcity = Record.city;
  Record.editnic=Record.nic;

} 

UpdateRecord(recorddata){
  let record = {};
  record['fullName']=recorddata.editname;
  record['age']=recorddata.editage;
  record['city']=recorddata.editcity;
  record['nic']=recorddata.editnic;
  this.DoctorService.update_doctor(recorddata.id, record);
  recorddata.isedit = false;
}

DeleteDoctor(record_id){
  this.DoctorService.delete_doctor(record_id);
}


}
