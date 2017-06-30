import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template:
    `<h1>Router Demo</h1>
    <nav>
    <a routerLink="/page-a" routerLinkActive="active">A</a> |
    <a routerLink="/page-b/5/bob" routerLinkActive="active">B</a> | 
    <!-- Link to ColorsModule area -->
    <a routerLink="/colors" routerLinkActive="active">Colors</a> 
    </nav>
    <!-- Where router should display a view -->
    <router-outlet></router-outlet>`
})
export class AppComponent { }
