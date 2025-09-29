import { Component, Input } from '@angular/core';
import { IRecord } from '../../../models/record';
import { DatePipe } from '@angular/common';
import { TranslitDatePipe } from '../../../helpers/translit-date-pipe';
import { Player } from '../../player/player';

@Component({
  selector: 'app-mails-table-item',
  imports: [DatePipe, TranslitDatePipe, Player],
  templateUrl: './mails-table-item.html',
  styleUrl: './mails-table-item.scss',
})
export class MailsTableItem {
  @Input() mail?: IRecord;
}
