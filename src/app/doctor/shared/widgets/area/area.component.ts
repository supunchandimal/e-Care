import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  
  chartOptions : {};
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = 
    {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Income Details'
      },
      xAxis: {
          categories: ['March', 'April', 'May', 'June', 'July', 'August', 'October'],
          tickmarkPlacement: 'on',
          title: {
              enabled: false
          }
      },
      yAxis: {
          title: {
              text: 'Thousands'
          },
          labels: {
              formatter: function () {
                  return this.value / 1000;
              }
          }
      },
      tooltip: {
          split: true,
          valueSuffix: ' Thousands'
      },
      plotOptions: {
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'Month',
          data: [18000, 25000, 44000, 42000, 56000, 60000, 54000]
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
