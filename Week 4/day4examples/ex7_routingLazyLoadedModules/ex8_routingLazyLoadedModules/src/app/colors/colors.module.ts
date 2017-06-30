import { NgModule, Component } from '@angular/core';
import { CommonModule }        from '@angular/common';


import { GreenComponent }  from './colors.green';
import { RedComponent }    from './colors.red';
import { ColorsComponent } from './colors.component';
import { colorsRouting }   from './colors.routing';

@NgModule({
    // Import routing for this module and make available for all components.
    imports: [
        CommonModule,
        colorsRouting
    ],
    // Declare components grouped by this module.
    declarations: [
        ColorsComponent,
        GreenComponent,
        RedComponent
    ]
})
export class ColorsModule { }
