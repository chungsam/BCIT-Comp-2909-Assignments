import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-subtitle',
    templateUrl: './subtitle.component.html',
    styleUrls: ['./subtitle.component.css']
})
export class SubtitleComponent implements OnInit {
    subtitle: string;

    constructor() {
        this.subtitle = 'This is my new subtitle.';
    }

    ngOnInit() {
    }
}
