import { Component, OnInit } from '@angular/core';
import { UpdateProfileService } from './../../services/update-profile.service';


@Component({
  selector: 'app-update-account-doc',
  templateUrl: './update-account-doc.component.html',
  styleUrls: ['./update-account-doc.component.css']
})
export class UpdateAccountDocComponent implements OnInit {

  employee: any;
  doctorFirstName:string;
  doctorLastName:string;
  doctorEmail:string;
  doctorSpeciality:string;
  doctorWorkingHospital:string;
  constructor( public updateprofileservice : UpdateProfileService ) { }

  ngOnInit() {
    this.updateprofileservice.getDoctor().subscribe(data => {

      this.employee = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          doctorFirstName: e.payload.doc.data()['firstName'],
          doctorLastName: e.payload.doc.data()['lastName'],
          doctorEmail: e.payload.doc.data()['email'],
          doctorSpeciality: e.payload.doc.data()['speciality'],
          doctorWorkingHospital: e.payload.doc.data()['workingHospital'],
        };
      })
      console.log(this.employee);

    });
  }

  EditRecord(Record)
  {
    Record.isedit = true;
    Record.editFirstName = Record.doctorFirstName;
    Record.editLastName = Record.doctorLastName;
    Record.editEmail = Record.doctorEmail;
    Record.editSpeciality = Record.doctorSpeciality;
    Record.editWorkingHospital = Record.doctorWorkingHospital;
  }

  Updatarecord(recorddata)
  {
    let record = {};
    record['firstName'] = recorddata.editFirstName;
    record['lastName'] = recorddata.editLastName;
    record['email'] = recorddata.editEmail;
    record['speciality'] = recorddata.editSpeciality;
    record['workingHospital'] = recorddata.editWorkingHospital;
    this.updateprofileservice.updateDoctor(recorddata.id, record);
    recorddata.isedit = false;
  }
}