import { Component, OnInit } from '@angular/core';
import { validateEmail } from './email.validator';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: "chapter9",
    template: `
        <h3>Custom Validator Form</h3>
        <form [formGroup]="myForm">
            <input formControlName="email"><br>
            <input type="button" value="submit" (click)="onSubmit()">
        </form>
        Form Valid: {{myForm.valid}}<br>
        Form Value: {{myForm.value | json}}
    `
})
export class Chapter9 implements OnInit {
    myForm: FormGroup;

    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl("Jim@abc.com", [validateEmail])
        });
    }

    onSubmit() {
        console.log("Valid: " + this.myForm.valid);
        console.log("Value: " + JSON.stringify(this.myForm.value, null, 2));
    }
}