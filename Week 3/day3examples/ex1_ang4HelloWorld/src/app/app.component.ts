import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template:   
      `<h1>This is the header</h1>
    <nav>
    <a routerLink="/page-a" routerLinkActive="active">A</a> |
    <a routerLink="/page-b/3/bob" routerLinkActive="active">Bob</a>
    </nav>
    <!-- Where router should display a view -->
    <router-outlet></router-outlet>`
})
export class AppComponent { }