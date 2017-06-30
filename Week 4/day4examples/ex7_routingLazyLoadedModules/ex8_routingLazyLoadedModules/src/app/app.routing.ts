import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent }          from './app.component';
import { PageAComponent }        from './app.page-a';
import { PageBComponent }        from './app.page-b';
import { PageDefault }           from './app.pagedefault';
import { ColorsModule }          from './colors/colors.module';

const subroutes: Routes = [
    { path: 'page-a', component: PageAComponent },
    { path: 'page-b/:id/:firstname', component: PageBComponent },
    { path: '', redirectTo: '/page-a', pathMatch: 'full' },
    // This says load the ColorsModule which includes color components.
    { path: 'colors', loadChildren: 'app/colors/colors.module#ColorsModule' },
    { path: '**', component: PageDefault },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(subroutes);