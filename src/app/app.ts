import { VoicesMailDataService } from './shared/services/voices-mail-data-service';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IVoiceMailResponse } from './shared/models/responses/voice-mail';
import { AsyncPipe } from '@angular/common';
import { Header } from './shared/layout/header/header';
import { Footer } from './shared/layout/footer/footer';
import { IUser } from './shared/models/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('voice-message-aggregator-test');
  public voicesMailDataService: VoicesMailDataService = inject(VoicesMailDataService);
  public voiceMail: IVoiceMailResponse | null = null;
  public maxPage: number | null = null;
  public tempUser: IUser = {
    email: 'user@example.com',
  };
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
    this.voicesMailDataService.$eventFilter.next({
      ...this.voicesMailDataService.$eventFilter.value,
      page: page,
    });
  }
  ngOnInit() {
    this.voicesMailDataService.$eventFilter.subscribe((filter) => {
      this.voicesMailDataService.getVoiceMails().subscribe((res: IVoiceMailResponse) => {
        this.voiceMail = res;
        this.maxPage = res.maxPage;
        this.currentPage = res.currentPage;
      });
    });
  }
}
