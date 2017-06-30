import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template:
    `
<section>
<form  (ngSubmit)="onSubmit()" #myForm="ngForm">
        Name:
        <input type="text" pattern="[a-zA-Z ]*" minlength="3" required 
         [(ngModel)]="myName" name="firstName" #firstName="ngModel" >
        <div [hidden]="firstName.valid || firstName.pristine">
            This control is invalid.</div>
        <p *ngIf="firstName?.errors?.required">This field is required.</p>
        <p *ngIf="firstName?.errors?.pattern">
            Only alphabetical characters are allowed.</p>
        <p *ngIf="firstName?.errors?.minlength">
            This entry must have at least three characters.</p>  
      <button type="submit" class="btn btn-default" 
       [disabled]="!myForm.form.valid">Submit</button>
    </form>
</section>
`
})
export class AppComponent {
    myName: string;

    constructor() {
        this.myName = "frank";
    }
}
