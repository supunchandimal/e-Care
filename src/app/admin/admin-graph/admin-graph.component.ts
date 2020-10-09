import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 
import { AngularFireAuth } from '@angular/fire/auth';
import { AdminGraphService } from 'src/services/shared/admin-graph.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-graph',
  templateUrl: './admin-graph.component.html',
  styleUrls: ['./admin-graph.component.css']
})
export class AdminGraphComponent implements OnInit {
  DocCount: any;
  count: any;
  Usercount:any;
  Patientcount:any;

  constructor(public AdminGraphService: AdminGraphService, public firestore: AngularFirestore, private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  ngOnInit(): void {
    this.count=this.get_AllDocCount();
    this.Usercount=this.get_AllUserCount();
    this.Patientcount=this.get_AllPatientCount();
}
  get_AllDocCount() {
  //  this.firestore.collection("doctors").valueChanges(). subscribe( values =>
  //     console.log(values.length)  
  //   );
  this.firestore.collection("doctors").valueChanges(). subscribe( values =>
    {this.count=values.length
    });
  }

  get_AllUserCount() {
    this.firestore.collection("Users").valueChanges(). subscribe( values =>
      {this.Usercount=values.length
      });
    }

    get_AllPatientCount() {
      this.firestore.collection("Users",ref=>ref.where('role','==','patient')).valueChanges(). subscribe( values =>
        {this.Patientcount=values.length
      });
      // this.Patientcount= this.Usercount-this.count;
      // return this.Patientcount;
       
      }
}
