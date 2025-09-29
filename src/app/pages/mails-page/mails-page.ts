import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MailsTable } from '../../shared/components/mails/mails-table/mails-table';
import { Paginations } from '../../shared/components/paginations/paginations';
import { IVoiceMailResponse } from '../../shared/models/responses/voice-mail';
import { IUser } from '../../shared/models/user';
import { VoicesMailDataService } from '../../shared/services/voices-mail-data-service';
import { IRecord } from '../../shared/models/record';
import { Subject, switchMap, takeUntil } from 'rxjs';
@Component({
  selector: 'app-mails-page',
  imports: [MailsTable, Paginations],
  templateUrl: './mails-page.html',
  styleUrl: './mails-page.scss',
})
export class MailsPage {
  public voicesMailDataService: VoicesMailDataService = inject(VoicesMailDataService);
  public voiceMailResponse: IVoiceMailResponse | null = null;
  private destroy$ = new Subject<void>();
  public maxPage: number | null = null;
  public records: IRecord[] = [];
  public currentPage: number | null = 1;
  nextPage() {
    this.voicesMailDataService.$eventFilter.next({
      ...this.voicesMailDataService.$eventFilter.value,
      page: this.voicesMailDataService.$eventFilter.value.page + 1,
    });
  }
  backPage() {
    if (this.voicesMailDataService.$eventFilter.value.page > 1) {
      this.voicesMailDataService.$eventFilter.next({
        ...this.voicesMailDataService.$eventFilter.value,
        page: this.voicesMailDataService.$eventFilter.value.page - 1,
      });
    }
  }
  setPage(page: number) {
    console.log(page);
    this.voicesMailDataService.$eventFilter.next({
      ...this.voicesMailDataService.$eventFilter.value,
      page: page,
    });
  }

  ngOnInit() {
    this.voicesMailDataService.$eventFilter
      .pipe(
        takeUntil(this.destroy$),
        switchMap(() => this.voicesMailDataService.getVoiceMails())
      )
      .subscribe((res: IVoiceMailResponse) => {
        this.voiceMailResponse = res;
        this.records = res.records;
        this.maxPage = res.maxPage;
        this.currentPage = res.currentPage;
      });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
