import { Component, Input } from '@angular/core';
import { MailsTableItem } from '../mails-table-item/mails-table-item';
import { IRecord } from '../../../models/record';
import { Paginations } from '../../paginations/paginations';
import { IMIME } from '../../../models/mime';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-mails-table',
  imports: [MailsTableItem, Paginations],
  templateUrl: './mails-table.html',
  styleUrl: './mails-table.scss',
})
export class MailsTable {
  @Input() mails: IRecord[] = [];
  downloadAudio(audioFile: IMIME) {
    const url = `${environment.audioUrl}/${audioFile.audioFile.filename}`;
    const a = document.createElement('a');
    a.href = url;
    a.download = audioFile.audioFile.filename;
    a.click();
  }
}
