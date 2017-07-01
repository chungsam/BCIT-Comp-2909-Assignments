import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'detail',
    templateUrl: './views/detail.html'
})

export class DetailComponent implements OnInit {

    constructor(
        private route: ActivatedRoute) {

     }

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        console.log(id);
     }
}