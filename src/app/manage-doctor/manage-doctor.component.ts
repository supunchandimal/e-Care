import { Component, OnInit } from '@angular/core';
import { ManageDoctorService } from 'src/services/shared/manage-doctor.service';


@Component({
  selector: 'app-manage-doctor',
  templateUrl: './manage-doctor.component.html',
  styleUrls: ['./manage-doctor.component.css']
})
export class ManageDoctorComponent implements OnInit {

  doctor: any;
  fullName: string;
  age:number;
  city:string;


  constructor(public DoctorService: ManageDoctorService ) { }

  ngOnInit(){
this.DoctorService.get_Alldoctors().subscribe(data => {

  this.doctor=data.map(e=> {
    return{
      id: e.payload.doc.id,
      isedit: false,
      fullName: e.payload.doc.data()['fullName'],
      age: e.payload.doc.data()['age'],
      city: e.payload.doc.data()['city'],
    };
  })
  console.log(this.doctor);
})

}

CreateRecord(){
  let Record = {};
  Record['fullName']=this.fullName;
  Record['age']=this.age;
  Record['city']=this.city;

  this.DoctorService.create_Newdoctor(Record).then(res=> {

    this.fullName="";
    this.age=undefined;
    this.city="";
  }).catch(error=>{
    console.log(error);
  });
}

EditRecord(Record){
  Record.isedit = true;
  Record.editname = Record.fullName;
  Record.editage=Record.age;
  Record.editcity = Record.city;
}

UpdateRecord(recorddata){
  let record = {};
  record['fullName']=recorddata.editname;
  record['age']=recorddata.editage;
  record['city']=recorddata.editcity;
  this.DoctorService.update_doctor(recorddata.id, record);
  recorddata.isedit = false;
}

DeleteDoctor(record_id){
  this.DoctorService.delete_doctor(record_id);
}

}