import { Route } from '@angular/router';
import { Layout } from '@company-workspace/shared-ui';
import { Four } from './four/four';

export const appRoutes: Route[] = [
    {
        path: '', component: Layout,
        children: [
            { path: 'four', component: Four, },
            { path: '', redirectTo: 'four', pathMatch: 'full' },
        ],
    },
    { path: '**', redirectTo: '' },
];