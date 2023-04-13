import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public bigchart:any=[];
  cards= {};
  piechart = {};
  drilldown = {};
  datalabel={};
  constructor(private dashboardService:DashboardService){}
  ngOnInit(){
    
    console.log(localStorage.getItem('list'));
    this.bigchart = this.dashboardService.bigchart();
    this.cards=this.dashboardService.cards();
    this.piechart=this.dashboardService.piechart();
    this.drilldown=this.dashboardService.Drilldown();
    this.datalabel=this.dashboardService.datalabel();      
  }
  
  getChartData(){
    this.dashboardService.getAll().subscribe((res: any) => {
      let temperatures = res.map((item: { temperature: any; }) => item.temperature); 
      let intList=[];
      let x:any=[];
      for (let i=0 ; i<x.length ; i++){
        let value = parseFloat(temperatures[i]);
      if (!isNaN(value)) {
        intList.push(value);
      }
      }
      console.log(x)
      x=intList;
      return(x);
      
      // console.log(intList);
      // return (intList);
    });
  } 
}