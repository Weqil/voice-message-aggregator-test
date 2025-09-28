import { Component, Input } from '@angular/core';
import { IRecord } from '../../../models/record';
import { DatePipe } from '@angular/common';
import { TranslitDatePipe } from '../../../helpers/translit-date-pipe';

@Component({
  selector: 'app-mails-table-item',
  imports: [DatePipe, TranslitDatePipe],
  templateUrl: './mails-table-item.html',
  styleUrl: './mails-table-item.scss',
})
export class MailsTableItem {
  @Input() mail?: IRecord;
}
