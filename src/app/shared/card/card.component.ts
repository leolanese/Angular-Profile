import { ChangeDetectionStrategy, Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  constructor() {}

  @Input()
  cardTitle: string;

  @Input()
  cardBody: string;

  @Input()
  cardInfo: string;

  ngOnInit() {}
}
