import { ChangeDetectionStrategy, Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { MessageService } from '../../services/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, OnDestroy {
  message: any;
  x: any;
  subscription$: Subscription;

  defaultTitle = 'default title';
  defaultSubtitle = 'Sub Caca'

  cardTitle = 'cardTitle';
  action1 = 'action1';
  action2 = 'action2';
  action3 = 'action3';

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    // subscribe to home component messages
    this.subscription$ = this.messageService
      .getMessage()
      .subscribe(message => {
        console.log('Container DashboardComponent reciving message:', message);
        this.message = message;
      });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription$.unsubscribe();
  }

}
