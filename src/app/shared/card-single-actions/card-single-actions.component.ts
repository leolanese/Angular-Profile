import { ChangeDetectionStrategy, Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'card-single-actions-component',
  templateUrl: './card-single-actions.component.html',
  styleUrls: ['./card-single-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardSingleActionsComponent implements OnInit {
  @Input()
  action1: string;
  @Input()
  actio2: string;
  @Input()
  action3: string;

  title = 'Mimecast';

  constructor() { }

  ngOnInit() {}

}
