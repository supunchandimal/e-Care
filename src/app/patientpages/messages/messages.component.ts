import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { PatientMessagesService  } from './../../../services/shared/patient-messages.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  flag=8;

  sentAnnouncements : any;
  receivedAnnouncements : any;
  subject: string;
  message: string;
  reply : string;

  constructor(public AnnouncementsDocService: PatientMessagesService) { }

  ngOnInit() {

    

    this.AnnouncementsDocService.GetReceivedAnnouncement().subscribe(data => {

      this.receivedAnnouncements = data.map(e => {
        return {
          subject: e.payload.doc.data()['subject'],
          message: e.payload.doc.data()['message'],
        };
      })
      console.log(this.receivedAnnouncements);

    });
  }


  
    
  }