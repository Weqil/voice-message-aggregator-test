import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IVoiceMailResponse } from './shared/models/responses/voice-mail';
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
  public tempUser: IUser = {
    email: 'user@example.com',
  };
}
