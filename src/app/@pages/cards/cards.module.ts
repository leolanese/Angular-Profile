import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardsRoutingModule } from './cards-routing.module';
import { CardComponentModule } from '../../shared/card';
import { FormsModule } from '../forms/forms.module';
import { CardListComponentModule } from '../../shared/card-list';

@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    CardsRoutingModule,
    CardComponentModule,
    FormsModule,
    CardListComponentModule
  ],
  exports: [CardsComponent]
})
export class CardsModule {}
