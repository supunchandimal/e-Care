import { Component, OnInit } from '@angular/core';
import { Announcement } from 'src/services/shared/announcement';
import { AdminAnnouncementService } from 'src/services/shared/admin-announcement.service';
import { Contactmessages } from 'src/services/shared/contactmessages';

@Component({
  selector: 'app-admin-announcement',
  templateUrl: './admin-announcement.component.html',
  styleUrls: ['./admin-announcement.component.css']
})
export class AdminAnnouncementComponent implements OnInit {
  announcement = new Announcement();
  status:number;
  announcements : Announcement[];
  constructor( private send: AdminAnnouncementService ) 
  { }

  ngOnInit(): void {
    this.send.getannouncement().subscribe(announcements=>{
      this.announcements = announcements;
      console.log(announcements[0].message)
      console.log(announcements[1].message)
    }
        
    )
  }


  onsubmit(form){
    // console.log(form.value.message);
     console.log(form.value.audience);
    // console.log(form.value.subject)
  
    this.announcement.audience=form.value.audience;
    this.announcement.message= form.value.message;
    this.announcement.subjcect = form.value.subject;

    this.status=this.send.send(this.announcement);
    if(this.status=1){
    console.log(this.status);}
    form.reset();
  }
}
