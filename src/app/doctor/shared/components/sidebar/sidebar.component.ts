import { UpdateProfileService } from './../../../services/update-profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  doctor: any;
  doctorFirstName:string;
  doctorLastName:string;
  doctorEmail:string;

  constructor( public updateprofileservice : UpdateProfileService) { }

  ngOnInit() {
    this.updateprofileservice.getDoctorData().subscribe(data => {
      this.doctor = data;
      // this.doctor = data.map(e => {
      //   return {
      //     id: e.payload.doc.id,
          
      //     doctorFirstName: e.payload.doc.data()['firstName'],
      //     doctorLastName: e.payload.doc.data()['lastName'],
      //     doctorEmail: e.payload.doc.data()['email'],
         
      //   };
      // })
      console.log('doctor data - ',this.doctor);

    });
  }

}
