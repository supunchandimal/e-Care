import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  profile : any;
  constructor(private db: AngularFirestore){}

  ngOnInit(){}

  // dateChange(){
  //   this.db.collection('ppic', ref=>ref.where("currentUserID","==",this.currentUserID)).valueChanges()
  //   .subscribe(output => {
  //     this.profile = output;
  //   })
  
  // }
}
