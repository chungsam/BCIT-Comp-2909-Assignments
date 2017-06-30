import { Component } from '@angular/core';

// Define second directive.
@Component({
    // Selector uses lower case with hyphens.
    selector: 'second-directive',
    template: `<h3>This is the second directive!</h3>
                <third-directive></third-directive>`,
})
export class NewDirective {
}
