import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CdoctorsService } from '../services/cdoctors.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  flag =8;

  constructor(private service:CdoctorsService) { 

  }

  ngOnInit(): void {
    // this.service.getPetion().subscribe((data)=>{
      // data.docs.map(data=>{
        // console.log(data.data);
      // });
    // })
  }

}
