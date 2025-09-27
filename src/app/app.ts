import { VoicesMailDataService } from './shared/services/voices-mail-data-service';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('voice-message-aggregator-test');
  private voicesMailDataService: VoicesMailDataService = inject(VoicesMailDataService);
  ngOnInit(){
    this.voicesMailDataService.getVoiceMails()
  }
}
