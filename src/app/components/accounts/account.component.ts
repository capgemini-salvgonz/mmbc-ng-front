import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';

import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';


import { UserService } from '../../service/users.service';
import { User } from 'src/app/model/user.model';


export interface PeriodicElement {
  account: number;
  description: string;
  type: string;
  balance: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {account: 2456504, description: "BBVA Nómina", type: "Debit", balance:9400},  
  {account: 1545631, description: "BBVA Libreton", type: "Debit", balance:257},  
  {account: 8713540 , description: "SODEXO vales de despensa", type: "Debit", balance:2456}
];


@Component({
  selector: 'account',
  templateUrl: 'account.component.html',
  styleUrls: ['account.component.css'],
  providers: [UserService]       
})
export class AccountComponent {
  public user: User;
  public displayedColumns: string[] = ['Account', 'Description', 'Type', 'Balance'];
  public dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  
  /** Polar chart */
  public polarAreaChartLabels: Label[] = ['BBVA Nómina', 'BBVA Libreton', 'SODEXO vales de despensa'];
  public balances: SingleDataSet = [9400, 257, 2456];
  public polarAreaLegend = false;

  public polarAreaChartType: ChartType = 'polarArea';
  /** End Polar chart */

  /** 
   *  Pie Chart
   */

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = ['BBVA Nómina', 'BBVA Libreton', 'SODEXO Vales de despensa'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  // public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];
  
  /** End Pie chart */

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
  ) {
  }

  ngOnInit(): void {    
    try {
      this.user = JSON.parse(sessionStorage.getItem("user"));
      
      if(!this.user){        
        this._router.navigate(['login']);
      }
    }catch(error){
      this._router.navigate(['login']);
    }    
  }

  ngAfterViewInit(): void {
    console.log();    
  }
}
