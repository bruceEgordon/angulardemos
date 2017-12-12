import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: "chapter9",
    template: `
        <form [formGroup]="myForm">
            First: <input formControlName="first" ><br>
            Last: <input formControlName="last" ><br>
            <div formGroupName="address">
                Address: <input formControlName="address" ><br>
                City: <input formControlName="city" size="12" ><br>
                State: <input formControlName="state" size="2"><br>
                Zip: <input formControlName="zip" size="5" ><br>
            </div>
            <input type="button" value="submit" (click)="onSubmit()">
        </form>
    `
})
export class Chapter9 implements OnInit {
    myForm: FormGroup;

    ngOnInit(){
        this.myForm = new FormGroup({
            first: new FormControl("Jim", []),
            last: new FormControl("Doe", []),
            address: new FormGroup({
                address: new FormControl("Main Street", []),
                city: new FormControl("Newark", []),
                state: new FormControl("NJ", []),
                zip: new FormControl("07102", [])
            })
        });
    }
    onSubmit(){
        console.log(JSON.stringify(this.myForm.value, null, 2));
    }
}