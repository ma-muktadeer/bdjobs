import { Route } from '@angular/router';
import { Layout } from '@company-workspace/shared-ui';
import { Sms } from './sms/sms';

export const appRoutes: Route[] = [
  {
    path: '',
    component: Layout,
    children: [
      { path: 'sms', component: Sms, },
      { path: '', redirectTo: 'sms', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '' },
];
