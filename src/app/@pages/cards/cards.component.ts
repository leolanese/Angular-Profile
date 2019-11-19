import {Component, OnDestroy, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { Subscription} from 'rxjs';
import { MessageService } from '../../services';
import * as data from '../../shared/json/json.json';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent implements OnInit, OnDestroy {
  message: object;
  subscription$: Subscription;
  cardTitle: string;
  cardBody: string;
  cardInfo: string;
  jobsCounters: number[];
  cardComponentTitle: 'Most recent project';
  keyTechnologies: string[];

  @Input()
  cards: string[];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    const subjectData = data;
    // send message to subscribers via observable subject
    this.messageService.sendMessage(subjectData);

    // subscribe to home component messages
    this.subscription$ = this.messageService.getMessage().subscribe(card => {
      this.cards = card;
      this.jobsCounters = [...Array(card[0][0].job.length).keys()];
      this.keyTechnologies = card[0][0].keytechnologies;
    });

    this.messageService.sendMessage(subjectData);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription$.unsubscribe();
  }
}
