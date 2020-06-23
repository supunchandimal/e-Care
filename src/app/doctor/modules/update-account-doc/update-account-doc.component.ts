import { Component, OnInit } from '@angular/core';
import { UpdateProfileService } from './../../services/update-profile.service';


@Component({
  selector: 'app-update-account-doc',
  templateUrl: './update-account-doc.component.html',
  styleUrls: ['./update-account-doc.component.css']
})
export class UpdateAccountDocComponent implements OnInit {

  employee: any;
  doctorFullName:string;
  doctorEmail:string;
  doctorCity:string;
  message : string;
  constructor( public updateprofileservice : UpdateProfileService ) { }

  ngOnInit() {
    this.updateprofileservice.getDoctor().subscribe(data => {

      this.employee = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          doctorFullName: e.payload.doc.data()['fullName'],
          doctorEmail: e.payload.doc.data()['email'],
          doctorCity: e.payload.doc.data()['city'],
        };
      })
      console.log(this.employee);

    });
  }

  EditRecord(Record)
  {
    Record.isedit = true;
    Record.editFullName = Record.doctorFullName;
    Record.editEmail = Record.doctorEmail;
    Record.editCity = Record.doctorCity;
  }

  Updatarecord(recorddata)
  {
    let record = {};
    record['fullName'] = recorddata.editFullName;
    record['email'] = recorddata.editEmail;
    record['city'] = recorddata.editCity;
    this.updateprofileservice.updateDoctor(recorddata.id, record);
    recorddata.isedit = false;
  }
}