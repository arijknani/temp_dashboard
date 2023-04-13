import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-datalabel',
  templateUrl: './datalabel.component.html',
  styleUrls: ['./datalabel.component.scss']
})
export class DatalabelComponent {
  @Input() data = {};
  Highcharts = Highcharts;
  chartOptions = {}; 
  ngOnInit(){
    this.chartOptions={
      chart: {
        type: 'line'
    },
    title: {
        text: 'Monthly Average Temperature in Tunisia'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Temperature (°C)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
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

