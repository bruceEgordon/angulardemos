import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: "chapter9",
    template: `
        <form [formGroup]="myForm">
            First: <input formControlName="first"><br>
            Last: <input formControlName="last"><br>
            <input type="button" value="submit" (click)="onSubmit();">
        </form>
    `
})
export class Chapter9 implements OnInit {
    myForm: FormGroup;

    ngOnInit() {
        this.myForm = new FormGroup({
            first: new FormControl("Jim", []),
            last: new FormControl("Doe", [Validators.required])
        });
    }

    onSubmit(){
        console.log(this.myForm)
    }
}