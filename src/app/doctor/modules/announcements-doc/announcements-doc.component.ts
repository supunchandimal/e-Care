import { AnnouncementsDocService } from './../../services/announcements-doc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcements-doc',
  templateUrl: './announcements-doc.component.html',
  styleUrls: ['./announcements-doc.component.css']
})
export class AnnouncementsDocComponent implements OnInit {
  sentAnnouncements : any;
  receivedAnnouncements : any;
  subject: string;
  message: string;
  reply : string;

  constructor(public AnnouncementsDocService: AnnouncementsDocService) { }

  ngOnInit() {

    this.AnnouncementsDocService.GetSentAnnouncement().subscribe(data => {

      this.sentAnnouncements = data.map(e => {
        return {
          subject: e.payload.doc.data()['subject'],
          message: e.payload.doc.data()['message'],
        };
      })
      console.log(this.sentAnnouncements);

    });

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


  SendAnnouncement()
  {
    
    let Record = {};
    Record['subject'] = this.subject;
    Record['message'] = this.message;
    Record['audience'] = 'patients';
    Record['sentby'] = 'D01';
    

    this.AnnouncementsDocService.SendAnnouncement(Record).then(res => {
      console.log(res);
      this.reply = "Announcement Sent Successfully";
    }).catch(error => {
         console.log(error);
      });
    }

    
  }