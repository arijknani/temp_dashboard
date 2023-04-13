import { Injectable,forwardRef,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DashboardComponent } from './dashboard/dashboard.component';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
    
    constructor(private http: HttpClient) {}
    x=[0,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.4,19.5,19.5,19.5,19.5,19.5,19.5,19.5,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.6,19.7,19.6,19.6,19.6,19.7,19.7,19.7,19.7,19.7,19.7,19.7,19.7,19.7,0,19.8,19.8,19.8,19.8,19.8,19.8,19.8];
    getAll(){
        return this.http.get("http://localhost:8080/findAll").pipe(
          map(result => result)
        );
      }

    bigchart() {
        return (this.x);}

  cards(){
    return this.x;
  }
  piechart(){
    return ([{
      name: 'Chrome',
      y: 70.67,
      sliced: true,
      selected: true
  }, {
      name: 'Edge',
      y: 14.77
  },  {
      name: 'Firefox',
      y: 4.86
  }, {
      name: 'Safari',
      y: 2.63
  }, {
      name: 'Internet Explorer',
      y: 1.53
  },  {
      name: 'Opera',
      y: 1.40
  }, {
      name: 'Sogou Explorer',
      y: 0.84
  }, {
      name: 'QQ',
      y: 0.51
  }, {
      name: 'Other',
      y: 2.6
  }]);
  }
  Drilldown(){
    return[
                {
                    name: 'Chrome',
                    y: 63.06,
                    drilldown: 'Chrome',
                    data: [
                      [
                          'v65.0',
                          0.1
                      ],
                      [
                          'v64.0',
                          1.3
                      ],
                      [
                          'v63.0',
                          53.02
                      ],
                      [
                          'v62.0',
                          1.4
                      ],
                      [
                          'v61.0',
                          0.88
                      ],
                      [
                          'v60.0',
                          0.56
                      ],
                      [
                          'v59.0',
                          0.45
                      ],
                      [
                          'v58.0',
                          0.49
                      ],
                      [
                          'v57.0',
                          0.32
                      ],
                      [
                          'v56.0',
                          0.29
                      ],
                      [
                          'v55.0',
                          0.79
                      ],
                      [
                          'v54.0',
                          0.18
                      ],
                      [
                          'v51.0',
                          0.13
                      ],
                      [
                          'v49.0',
                          2.16
                      ],
                      [
                          'v48.0',
                          0.13
                      ],
                      [
                          'v47.0',
                          0.11
                      ],
                      [
                          'v43.0',
                          0.17
                      ],
                      [
                          'v29.0',
                          0.26
                      ]
                  ]
              },
                {
                    name: 'Safari',
                    y: 19.84,
                    drilldown: 'Safari',
                    data: [
                      [
                          'v11.0',
                          3.39
                      ],
                      [
                          'v10.1',
                          0.96
                      ],
                      [
                          'v10.0',
                          0.36
                      ],
                      [
                          'v9.1',
                          0.54
                      ],
                      [
                          'v9.0',
                          0.13
                      ],
                      [
                          'v5.1',
                          0.2
                      ]
                  ]
                },
                {
                    name: 'Firefox',
                    y: 4.18,
                    drilldown: 'Firefox',
                    data: [
                      [
                          'v58.0',
                          1.02
                      ],
                      [
                          'v57.0',
                          7.36
                      ],
                      [
                          'v56.0',
                          0.35
                      ],
                      [
                          'v55.0',
                          0.11
                      ],
                      [
                          'v54.0',
                          0.1
                      ],
                      [
                          'v52.0',
                          0.95
                      ],
                      [
                          'v51.0',
                          0.15
                      ],
                      [
                          'v50.0',
                          0.1
                      ],
                      [
                          'v48.0',
                          0.31
                      ],
                      [
                          'v47.0',
                          0.12
                      ]
                  ]
              },
                {
                    name: 'Edge',
                    y: 4.12,
                    drilldown: 'Edge',
                    data: [
                      [
                          'v16',
                          2.6
                      ],
                      [
                          'v15',
                          0.92
                      ],
                      [
                          'v14',
                          0.4
                      ],
                      [
                          'v13',
                          0.1
                      ]
                  ]
                },
                {
                    name: 'Opera',
                    y: 2.33,
                    drilldown: 'Opera',
                    data: [
                      [
                          'v50.0',
                          0.96
                      ],
                      [
                          'v49.0',
                          0.82
                      ],
                      [
                          'v12.1',
                          0.14
                      ]
                  ]
                },
                {
                    name: 'Internet Explorer',
                    y: 0.45,
                    drilldown: 'Internet Explorer',
                    data: [
                      [
                          'v11.0',
                          6.2
                      ],
                      [
                          'v10.0',
                          0.29
                      ],
                      [
                          'v9.0',
                          0.27
                      ],
                      [
                          'v8.0',
                          0.47
                      ]
                  ]
                },
                {
                    name: 'Other',
                    y: 1.582,
                    drilldown: null
                }
            ];
          }

    datalabel(){
        return[11.5,12.0,13.2,15.6,19.3,23.2,26.3,26.8,24.4,20.4,15.9,12.58];
    }
}
 
  


