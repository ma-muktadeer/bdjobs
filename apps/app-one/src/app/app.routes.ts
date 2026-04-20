import { Route } from '@angular/router';
import { Sms } from './sms/sms';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('@company-workspace/shared-ui').then(m => m.Layout),
    children: [
      { path: 'sms', component: Sms, },
      { path: '', redirectTo: 'sms', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '' },
];
