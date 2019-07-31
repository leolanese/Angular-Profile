import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'card-single-component',
  templateUrl: './card-single.component.html',
  styleUrls: ['./card-single.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardSingleComponent implements OnInit {
  @Input()
  cardTitle: string;
  @Input()
  action1: string;
  @Input()
  action2: string;
  @Input()
  action3: string;

  @Output()
  dropdownClick: EventEmitter<Event> = new EventEmitter<Event>();

  onDropdownClick(event: Event): void {
    console.log('onDropdownClick', event);
    this.dropdownClick.emit(event);
  }

  constructor() {}

  ngOnInit() {}
}
