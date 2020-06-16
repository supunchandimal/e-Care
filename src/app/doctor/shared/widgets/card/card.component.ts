import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() label : string;
  @Input() total : string;
  @Input() percentage : string;
  Highcharts = Highcharts;
  chartOptions = {}
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = 
      {
        chart: {
            type: 'area',
            backgroundColor : 0,
            margin : [ 2,2,2,2],
            height : 60
        },
        title: {
            text: null
        },
        subtitle: {
            text: null
        },

        tooltip: {
            split: true,
            outside : true
        },
        legend : {
          enabled : false
        },
        credits: {
          enabled : false
        },

        exporting: {
          enabled : false
        },
        xAxis : {
          labels : {
            enabled : false
          },
          title : {
            text : null
          },
          startOnTick : false,
          endOnTick : false,
          tickOptions : []
        },
        yAxis : {
          labels : {
            enabled : false
          },
          title : {
            text : null
          },
          startOnTick : false,
          endOnTick : false,
          tickOptions : []
        },

        series: [{
          data : [71,78,66,90]
        }]
    };
    HC_exporting(Highcharts);
    setTimeout(() =>{
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
