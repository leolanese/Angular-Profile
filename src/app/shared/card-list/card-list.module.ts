import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardListComponent } from './card-list.component';

@NgModule({
  declarations: [CardListComponent],
  imports: [CommonModule],
  exports: [CardListComponent]
})
export class CardListComponentModule {}
