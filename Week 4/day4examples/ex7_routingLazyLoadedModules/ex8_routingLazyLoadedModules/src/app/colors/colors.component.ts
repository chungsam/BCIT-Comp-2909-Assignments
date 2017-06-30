import { Component } from '@angular/core';

@Component({
    template: `
    <h4>Colors</h4>
     <a routerLink="/colors/red" routerLinkActive="active">red</a> | 
     <a routerLink="/colors/green" routerLinkActive="active">green</a>`
})
export class ColorsComponent { }
