import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent }          from './app.component';
import { HomeComponent }          from './home.component';
import { AboutComponent }          from './about.component';
import { DetailComponent }          from './detail.component';
import { PageDefault }           from './app.pagedefault';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home/detail/:id', component: DetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageDefault }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
