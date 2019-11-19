import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription} from 'rxjs';
import { MessageService } from '../../services';
import * as data from '../../shared/json/json.json';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnDestroy {
  message: object;
  subscription$: Subscription;
  cardTitle: any;
  cardBody: any;
  jobsCounter: number[];

  @Input()
  cards: string[];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    const subjectData = data;
    // send message to subscribers via observable subject
    this.messageService.sendMessage(subjectData);

    // subscribe to home component messages
    this.subscription$ = this.messageService.getMessage().subscribe(card => {
      console.log('Container DashboardComponent receiving message:', card);
      console.log('Container cards times:', card[0][0].job.length);
      this.cards = card;
      this.jobsCounter = [...Array(card[0][0].job.length).keys()];
    });

    this.messageService.sendMessage(subjectData);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription$.unsubscribe();
  }
}
