import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { GreenComponent } from './colors.green';
import { RedComponent }   from './colors.red';
import { ColorsComponent } from './colors.component';
const ROUTES = [
    { path: '', component: ColorsComponent },
    { path: 'green', component: GreenComponent },
    { path: 'red', component: RedComponent }
];
export const colorsRouting: ModuleWithProviders = RouterModule.forChild(ROUTES);
