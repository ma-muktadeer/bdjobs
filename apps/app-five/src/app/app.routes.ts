import { Route } from '@angular/router';
import { Layout } from '@company-workspace/shared-ui';
import { NxWelcome } from './nx-welcome';

export const appRoutes: Route[] = [
    {
        path: '', component: Layout,
        children: [
            { path: 'five', component: NxWelcome, },
            { path: '', redirectTo: 'five', pathMatch: 'full' },
        ],
    },
    { path: '**', redirectTo: '' },
];
