import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-drilldown',
  templateUrl: './drilldown.component.html',
  styleUrls: ['./drilldown.component.scss']
})
export class DrilldownComponent {
  @Input() data = {};
  Highcharts = Highcharts;
  chartOptions = {}; 
  ngOnInit(){
    this.chartOptions=
      {
        chart: {
            type: 'column'
        },
        title: {
            align: 'left',
            text: 'Temperature measurements. April, 2023'
        },
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },
        series: [{
            data: this.data
        }]
    };
    HC_exporting(Highcharts);
    //to make the chart responsive
    setTimeout( () => {
    window.dispatchEvent(
        new Event('resize')
    );
    });
    }  
}

