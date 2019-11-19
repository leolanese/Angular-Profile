import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter
} from '@angular/core';
import { MessageService } from '../../services/index';

import * as data from '../json/json.json';

@Component({
  selector: 'stat-component',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatComponent {
  @Output()
  triggerCardEvent: EventEmitter<Event> = new EventEmitter<Event>();

  onTriggerCardEvent(event: Event): void {
    console.log('triggerStatEvent', event);
    this.triggerCardEvent.emit(event);
  }

  onSendMessage(): void {
    let cv = data;
    // send message to subscribers via observable subject
    this.messageService.sendMessage(cv);
  }

  onClearMessage(): void {
    // clear message
    this.messageService.clearMessage();
  }

  constructor(private messageService: MessageService) {}
}
