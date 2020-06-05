import { Component, OnInit } from '@angular/core';
import { ManageDoctorService } from 'src/services/shared/manage-doctor.service';


@Component({
  selector: 'app-manage-doctor',
  templateUrl: './manage-doctor.component.html',
  styleUrls: ['./manage-doctor.component.css']
})
export class ManageDoctorComponent implements OnInit {
  public genderList: string[];
  doctor: any;
  fullName: string;
  email:string;
  nic:string;
  age:number;
  city:string;
  gender:string;
  speciality:string;
  message:string;

  constructor(public DoctorService: ManageDoctorService ) { }

  ngOnInit(){
this.genderList =  ['Male', 'Female', 'Others'];    
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

CreateRecord(){
  let Record = {};
  Record['fullName']=this.fullName;
  Record['email']=this.email;
  Record['nic']=this.nic;
  Record['age']=this.age;
  Record['city']=this.city;
  Record['gender']=this.gender;
  Record['speciality']=this.speciality;

  this.DoctorService.create_Newdoctor(Record).then(res=> {

    this.fullName="";
    this.email="";
    this.nic="";
    this.age=undefined;
    this.city="";
    this.gender="";
    console.log(res);
        this.message = "New doctor added";
  }).catch(error=>{
    console.log(error);
  });
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