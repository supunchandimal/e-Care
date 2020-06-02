import { Component, OnInit } from '@angular/core';
import { UpdateProfileService } from './../../services/update-profile.service';


@Component({
  selector: 'app-update-account-doc',
  templateUrl: './update-account-doc.component.html',
  styleUrls: ['./update-account-doc.component.css']
})
export class UpdateAccountDocComponent implements OnInit {

  doctor : string;
  doctorFirstName : string;
  doctorLastName : string;
  doctorEmail : string;
  message : string;

  constructor( public updateprofileservice : UpdateProfileService ) { }

  ngOnInit(): void {
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

  
}
