import { Component, Input } from '@angular/core';

// Define third directive.
@Component({
    selector: 'third-directive',
    template: `<h3>This is the third directive! {{firstName}} {{lastName}}</h3>`,
})
// This is really just a component.
export class ThirdDirective {
    @Input()
    firstName: string;
    @Input()
    lastName: string;
}
