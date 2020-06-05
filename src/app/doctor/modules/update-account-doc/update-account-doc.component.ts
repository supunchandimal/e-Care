import { Component, OnInit } from '@angular/core';
import { UpdateProfileService } from './../../services/update-profile.service';


@Component({
  selector: 'app-update-account-doc',
  templateUrl: './update-account-doc.component.html',
  styleUrls: ['./update-account-doc.component.css']
})
export class UpdateAccountDocComponent implements OnInit {

  doctor :any ;
  doctorFirstName : string;
  doctorLastName : string;
  doctorEmail : string;
  message : string;

  constructor( public updateprofileservice : UpdateProfileService ) { }

  ngOnInit(){
    this.updateprofileservice.getAllDoctor().subscribe( data => {
      this.doctor = data.map( e =>{
        return{
          id : e.payload.doc.id,
          isedit :false,
          doctorFirstName : e.payload.doc.data()['firstName'],
          doctorLastName : e.payload.doc.data()['lastName'],
          doctorEmail : e.payload.doc.data()['email'],
        };
      })
        console.log(this.doctor);
      })
      
}


  createDoctor(){
    let Record = {};
      Record ['firstName'] = this.doctorFirstName;
      Record ['lastName'] = this.doctorLastName;
      Record ['email'] = this.doctorEmail;

      this.updateprofileservice.createDoctor(Record).then(res => {
        this.doctorFirstName = "";
        this.doctorLastName = "";
        this.doctorEmail = "";
        console.log(res);
        this.message = "byee";
      }).catch(error => {
        console.log(error);
      });

  }

  // EditDoctor(Record){
  // }


  // UpdateDoctor(recorddata){
  //   let record = {};
  //     record ['firstName'] = recorddata.doctorFirstName;
  //     record ['lastName'] = recorddata.doctorLastName;
  //     record ['email'] = recorddata.doctorEmail;
  //   this.updateprofileservice.updateDoctor(recorddata.id, record);
  //   recorddata.isedit = false;
  // }
  

  
}
