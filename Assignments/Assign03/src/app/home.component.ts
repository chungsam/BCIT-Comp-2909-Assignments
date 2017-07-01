import { Component, OnInit } from '@angular/core';
import { FoodItem } from './models/FoodItem';
import { FoodService } from './services/FoodService';

@Component({
    selector: 'home',
    templateUrl: './views/home.component.html',
    providers: [FoodService]
})

export class HomeComponent implements OnInit {

    FOODITEMS: FoodItem[];
    foodItem: FoodItem;

    constructor(foodService: FoodService) {
        this.FOODITEMS = foodService.getFoodItems();
     }

    ngOnInit() {

    }
}