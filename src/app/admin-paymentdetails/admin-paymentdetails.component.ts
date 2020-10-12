import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 
import { AngularFireAuth } from '@angular/fire/auth';
import * as Chart from 'chart.js';
import {AdminPaymentDetailsService} from 'src/services/shared/admin-payment-details.service';
import { MatDialog, MatDialogConfig } from  '@angular/material/dialog';


@Component({
  selector: 'app-admin-paymentdetails',
  templateUrl: './admin-paymentdetails.component.html',
  styleUrls: ['./admin-paymentdetails.component.css']
})
export class AdminPaymentdetailsComponent implements OnInit {
  price: any;
  AppointCount: any;

  public canvas: any;
  public ctx: any;
  public labels: any = ['1', '2', '3', '4', '5', '6', '7'];
  public dataCases: any = {
    chart1: [900, 1800, 2700, 3600, 4500, 5400, 6300],
    // chart2: [2,4, 13, 12, 15, 18, 20],
    // chart3: [20,13, 25, 15, 35, 25, 62]
    // chart1: [this.get_AllPatientCount(), this.get_AllDocCount()],
    // chart2: [this.get_AllUserCount()]
  };
  

  constructor(public AdminPaymentService: AdminPaymentDetailsService, public firestore: AngularFirestore, private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  ngOnInit(): void {


    this.AdminPaymentService.get_AppPrice().subscribe(data => {

      this.price=data.map(e=> {
        return{
          id: e.payload.doc.id,
          docid: e.payload.doc.data()['docid'],
          channelID: e.payload.doc.data()['channelID'],
          docName: e.payload.doc.data()['docName'],
          patientname: e.payload.doc.data()['patientname'],
          price: e.payload.doc.data()['price']
        };
      })
      console.log(this.price);
    })

    this.createLineChart(this.labels, this.dataCases, 'myChart');

  }


  get_AppointCount() {
    this.firestore.collection("Appointments").valueChanges(). subscribe( values =>
      {this.AppointCount=values.length
      });
  }

  private createLineChart(labels, dataCases, chartId) {
    this.canvas = document.getElementById(chartId);
    this.ctx = this.canvas.getContext('2d');

    let chart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: "Raththa",
          data: dataCases.chart1,
          backgroundColor: '#ff4da6',
          borderColor: '#ff4da6',
          fill: false,
          borderWidth: 2
        },
        {
          label: "Doctor2",
          data: dataCases.chart2,
          backgroundColor: '#4d4dff',
          borderColor: '#4d4dff',
          fill: false,
          borderWidth: 2
        },
        {
          label: "Doctor3",
          data: dataCases.chart3,
          backgroundColor: '#009999',
          borderColor: '#009999',
          fill: false,
          borderWidth: 2
        }
      ]
      },
      options: {
        title: {
          display: true,
          text: "Total Appointments price"
        },
        tooltips: {
          mode: 'index',
          intersect: true
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        
      }
    });
  }
}
