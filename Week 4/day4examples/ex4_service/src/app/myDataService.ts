import { Component } from '@angular/core';

// This is the service.
export class MyDataService {
    names: Array<any>;
    myName: string;
    constructor() {
        this.names = ['John', 'Mary', 'Joan'];
        this.myName = "Sam";
    }
    getNames() {
        return this.names;
    }
    getMyName() {
        return this.myName;
    }
}
