import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatComponent } from './stat.component';

@NgModule({
  declarations: [
    StatComponent
  ],
  imports: [CommonModule],
  exports: [
    StatComponent
  ],
})
export class StatComponentModule { }
