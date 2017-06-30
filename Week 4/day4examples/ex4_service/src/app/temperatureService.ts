import { Component } from '@angular/core';

// This is the service.
export class TemperatureService {
    names: Array<any>;
    myName: string;
    constructor() {
        this.names = ['John', 'Mary', 'Joan'];
        this.myName = "Sam";
    }
    celsiusToFahrenheit(fahrenheit: number) {
        return (fahrenheit - 32) * (5/9);
    }
}
