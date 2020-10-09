import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';



export interface appointmentDetails {
  date: string,
  docName: string,
  time: string,
}


@Component({
  selector: 'app-appointment-doc',
  templateUrl: './appointment-doc.component.html',
  styleUrls: ['./appointment-doc.component.css']
})

export class AppointmentDocComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  
  ngOnInit() { }

}
