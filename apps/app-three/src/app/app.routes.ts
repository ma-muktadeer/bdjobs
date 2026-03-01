import { Route } from '@angular/router';
import { Layout } from '@company-workspace/shared-ui';
import { AppThree } from './app-three/app-three';

export const appRoutes: Route[] = [
    {
        path: '', component: Layout,
        children: [
            { path: 'three', component: AppThree, },
            { path: '', redirectTo: 'three', pathMatch: 'full' },
        ],
    },
    { path: '**', redirectTo: '' },
];
