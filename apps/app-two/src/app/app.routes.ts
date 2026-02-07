import { Route } from '@angular/router';
import { Layout } from 'libs/shared-ui/src/lib/layout/layout';
import { SmsShow } from './sms-show/sms-show';

export const appRoutes: Route[] = [
    {
        path: 'home', component: Layout,
        children: [
            { path: 'sms', component: SmsShow },
            { path: '', redirectTo: 'sms', pathMatch: 'full' },
        ],
    },
    { path: '**', redirectTo: '' },
];
