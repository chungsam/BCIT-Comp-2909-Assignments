import { Component }     from '@angular/core';
import { MyDataService } from './myDataService';
import { TemperatureService } from './temperatureService';

@Component({
    selector: 'my-app',
    template: `<h1>Hello world!  {{title}}</h1>
               <ul><li *ngFor="let name of names">{{name}}</li>
                    <li>{{myName}}</li>
                </ul>
                <h1>Fahrenheit: {{fahrenheit}}</h1>
                <h1>Celsius: {{celsius}}</h1>`,
    // 'providers' allows you to create and pass an instance
    // of the class to the constructor header.
    providers: [MyDataService, TemperatureService]
})
export class AppComponent {
    public title = 'This is Angular2!';
    names: Array<any>;
    myName: string;
    fahrenheit: number;
    celsius: number;

    // Create instance of 'MyDataService' right in the constructor
    // header.
    constructor(myDataService: MyDataService, temperatureService: TemperatureService) {
        // Use service to call getNames() method.
        this.names = myDataService.getNames();
        this.myName = myDataService.getMyName();
        this.fahrenheit = 6;
        this.celsius = temperatureService.celsiusToFahrenheit(this.fahrenheit);
    }
}
