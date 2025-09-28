import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'mails',
    pathMatch: 'full',
  },
  {
    path: 'mails',
    loadComponent: () =>
      import('./pages/mails-page/mails-page').then((m) => m.MailsPage),
  },
];
