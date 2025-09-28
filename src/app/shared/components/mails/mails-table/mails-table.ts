import { Component, Input } from '@angular/core';
import { MailsTableItem } from '../mails-table-item/mails-table-item';
import { IRecord } from '../../../models/record';
import { Paginations } from '../../paginations/paginations';

@Component({
  selector: 'app-mails-table',
  imports: [MailsTableItem, Paginations],
  templateUrl: './mails-table.html',
  styleUrl: './mails-table.scss',
})
export class MailsTable {
  @Input() mails: IRecord[] = [];
}
