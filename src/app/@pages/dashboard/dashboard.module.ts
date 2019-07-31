import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartsModule } from 'ng2-charts';

import { StatComponentModule } from 'src/app/shared/stat/stat.module';
import { CardComponentModule } from 'src/app/shared/card/card.module';
import { CardListComponentModule } from 'src/app/shared/card-list/card-list.module';
import { CardSingleComponentModule } from 'src/app/shared/card-single/card-single.module';
import { CardSingleActionsComponentModule } from 'src/app/shared/card-single-actions/card-single-actions.module';
import { HeadComponentModule } from 'src/app/shared/head/head.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    StatComponentModule,
    CardComponentModule,
    CardListComponentModule,
    CardSingleComponentModule,
    CardSingleActionsComponentModule,
    HeadComponentModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {}
