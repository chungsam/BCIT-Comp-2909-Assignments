import { Component }      from '@angular/core';
import {  MyNameService } from './app.mynameservice';

// This component consumes the re-usable service.
@Component({
    selector: 'my-app',
    template: `<button (click)="getSomeData()">Test GET Request</button>
                <ul>
                    <li *ngFor="let myData of myNames">{{myData.first}} {{myData.last}}</li>
                </ul>`,
    // Providers allow us to inject an object instance through the constroctor.
    // In this case we enable injection of MyDataService into AppComponent.
    providers: [MyNameService]
})
export class AppComponent {
    myNames: Array<any>;
    _myDataService: MyNameService;

    // Since we are using a provider above we can receive 
    // an instance through an instructor.
    constructor(myDataService: MyNameService) {
        // Store local reference to MyDataService.
        this._myDataService = myDataService;
    }

    getSomeData() {
        this._myDataService.getNames()
            // Subscribe to changes in the observable object
            // that is returned by getRemoteData.
            .subscribe(
            // You basically get three handlers.
            // 1. Handle successful data.
            data => {
                this.myNames = data
                console.log(JSON.stringify(data))
            },
            // 2. Handle error.
            error => {
                alert(error)
            },
            // 3. Execute final instructions when successful.
            () => {
                console.log("Finished")
            });
    }
}
