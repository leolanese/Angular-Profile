import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardSingleComponent } from './card-single.component';
import { CardSingleActionsComponent } from './../card-single-actions/card-single-actions.component';

import { CapitalizeFirstPipe } from '../../shared/pipes/capitalizefirst.pipe';

@NgModule({
  declarations: [
    CardSingleComponent,
    CardSingleActionsComponent,
    CapitalizeFirstPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardSingleComponent,
    CardSingleActionsComponent
  ],
})
export class CardSingleComponentModule { }
