import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MailsTable } from '../../shared/components/mails/mails-table/mails-table';

@Component({
  selector: 'app-mails-page',
  imports: [MailsTable],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mails-page.html',
  styleUrl: './mails-page.scss',
})
export class MailsPage {}
