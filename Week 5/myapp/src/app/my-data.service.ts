import { Injectable } from '@angular/core';

@Injectable()
export class MyDataService {
    names: Array<any>;
    constructor() {
        this.names = ['John', 'Mary', 'Joan'];
    }
    getNames() {
        return this.names;
    }
}
