import { UpdateProfileService } from './../../../services/update-profile.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

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

  constructor( public updateprofileservice : UpdateProfileService,private afAuth: AngularFireAuth,
    private router: Router) { }

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
  
  signOut(){
    if(confirm("Are you sure you want to logout?")){
      this.afAuth.signOut()
    .then(()=>{
      console.log('logged out!')
      this.router.navigate(['/home']);   
    })
    }
  }

}
