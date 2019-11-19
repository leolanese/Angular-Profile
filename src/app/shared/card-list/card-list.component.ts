import { ChangeDetectionStrategy, Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'card-list-component',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardListComponent implements OnInit {
  constructor() {}

  @Input()
  cardTitle: string;
  @Input()
  cardRole: string;
  @Input()
  cardDate: string;

  ngOnInit() {}
}
