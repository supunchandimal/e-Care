import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 
import { AngularFireAuth } from '@angular/fire/auth';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-admin-paymentdetails',
  templateUrl: './admin-paymentdetails.component.html',
  styleUrls: ['./admin-paymentdetails.component.css']
})
export class AdminPaymentdetailsComponent implements OnInit {
  AppointCount: any;

  public canvas: any;
  public ctx: any;
  // public labels: any = ['Doc 1', 'Doc 2', 'Doc 3'];
  public labels: any = [];
  public dataCases: any = {
    chart1: [900, 1800, 2700],
    chart2: [0, 900, 1800],
    chart3: [900, 900, 1800]
  };

  constructor(public firestore: AngularFirestore, private afAuth: AngularFireAuth, private db: AngularFirestore) { }

  ngOnInit(): void {
    this.AppointCount=this.get_AppointCount();
    let labels=[];
    for(var i=0; i< this.AppointCount; i++){
      labels[i];
    }
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
          label: "Doc 1",
          data: dataCases.chart1,
          backgroundColor: '#ffbb33',
          borderColor: '#ffbb33',
          fill: false,
          borderWidth: 2
        },
        {
          label: "Doc 2",
          data: dataCases.chart2,
          backgroundColor: '#ff4444',
          borderColor: '#ff4444',
          fill: false,
          borderWidth: 2
        },
        {
          label: "Doc 3",
          data: dataCases.chart3,
          backgroundColor: '#2277e0',
          borderColor: '#2277e0',
          fill: false,
          borderWidth: 2
        }
      ]
      },
      options: {
        title: {
          display: true,
          text: "Users"
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
