import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import {observable, Subscription} from 'rxjs';
import { MessageService } from '../../services';
import * as data from '../../shared/json/cv.json';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnDestroy {
  message: object;
  subscription$: Subscription;
  value: any;

  @Input()
  cards: string[];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    const cv = data;
    // send message to subscribers via observable subject
    this.messageService.sendMessage(cv);

    // subscribe to home component messages
    this.subscription$ = this.messageService.getMessage().subscribe(card => {
      console.log('Container DashboardComponent receiving message:', card);
      this.cards = card;
    });

    this.messageService.sendMessage(cv);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription$.unsubscribe();
  }
}
