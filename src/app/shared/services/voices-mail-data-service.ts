import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { IVoiceMailResponse } from '../models/responses/voice-mail';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IVoiceMailFilters } from '../models/filters/voice-mail-filters';
import { IRecord } from '../models/record';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class VoicesMailDataService {
  private readonly http: HttpClient = inject(HttpClient);
  public $eventFilter: BehaviorSubject<IVoiceMailFilters> = new BehaviorSubject({
    page: 1,
    limit: 10,
    alsoPagesStep: 2,
  });

  private paginateRecords(records: IRecord[]): IRecord[] {
    const start = (this.$eventFilter.value.page - 1) * this.$eventFilter.value.limit;
    const end = start + this.$eventFilter.value.limit;
    return records.slice(start, end);
  }

  private $loadRecords: BehaviorSubject<IVoiceMailResponse> =
    new BehaviorSubject<IVoiceMailResponse>({} as IVoiceMailResponse);

  generateAlsoPages(maxPage: number): number[] {
    let startPage = this.$eventFilter.value.page;
    let endPage = this.$eventFilter.value.page + this.$eventFilter.value.alsoPagesStep;
    if (this.$eventFilter.value.page > 1) {
      startPage = this.$eventFilter.value.page - this.$eventFilter.value.alsoPagesStep;
    }
    let pages = [];
    for (let i = startPage; i <= endPage && i <= maxPage; i++) {
      if (i > 0) {
        pages.push(i);
      }
    }
    return pages;
  }

  loadVoiceMails() {
    return this.http.get<IVoiceMailResponse>(environment.voicesMailJsonUrl).pipe(
      map((res: IVoiceMailResponse) => {
        this.$loadRecords.next(res);
        return this.$loadRecords.value;
      })
    );
  }

  slicesRecords(res: IVoiceMailResponse) {
    let maxPage = Math.ceil(res.records.length / this.$eventFilter.value.limit);
    return {
      metadata: res.metadata,
      records: this.paginateRecords(res.records),
      nextPage: this.$eventFilter.value.page + 1,
      previousPage: this.$eventFilter.value.page - 1,
      alsoPages: this.generateAlsoPages(maxPage),
      currentPage: this.$eventFilter.value.page,
      maxPage: maxPage,
    };
  }

  public getVoiceMails(): Observable<IVoiceMailResponse> {
    if (this.$loadRecords?.value?.records?.length > 0) {
      return of(this.slicesRecords(this.$loadRecords.value));
    }
    return this.loadVoiceMails().pipe(
      map((res: IVoiceMailResponse) => {
        return this.slicesRecords(res);
      })
    );
  }
}
