import { Component } from '@angular/core';
import { MyDataService } from './my-data.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],

    // 'providers' allows you to create and pass an instance
    // of the class to the constructor header.
    providers: [MyDataService]
})
export class AppComponent {
    title = 'app works!';
    names: Array<any>;
    // Store instance of 'MyDataService' at class level.
    _myDataService: MyDataService;

    // Create instance of 'MyDataService' right in the constructor
    // header.
    constructor(mydataDervice: MyDataService) {
        // Set class level reference.
        this._myDataService = mydataDervice;
        // Use service to call getNames() method.
        this.names = this._myDataService.getNames();
    }
}
