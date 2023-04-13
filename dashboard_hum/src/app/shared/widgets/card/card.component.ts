  import { Component, Input } from '@angular/core';
  import * as Highcharts from'highcharts';
  import HC_exporting from 'highcharts/modules/exporting';

  @Component({
    selector: 'app-widget-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
  })
  export class CardComponent {
    @Input() label !:string;
    @Input() total !:string;
    @Input() percentage!: string;
    @Input() data = {} ;
    Highcharts = Highcharts;
    chartOptions = {};
    ngOnInit(){
      this.chartOptions={
        chart: {
      type: 'area',
      backgroundColor:null,
      borderWidth:0,
      margin:[4,4,4,4],
      height:60
    },
    title :{
        text: null
    },
    xAxis:{
      labels:{
        enabled:false,
      },
      title:{
        text:null
      },
      startOnTick:false,
      endOnTick:false,
      TickOptions:[]
    },
    yAxis:{
      labels:{
        enabled:false,
      },
      title:{
        text:null
      },
      startOnTick:false,
      endOnTick:false,
      TickOptions:[]
    },
    tooltip: {
        split: true,
        outside:true
    },
    legend:{
      enabled:false,
    },
    exporting:{
        enabled: false,
    },
    credits:{
        enabled: false,
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



