import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: "chapter9",
    template: `
        <form [formGroup]="myForm">
            First: <input formControlName="first"><br>
            Last: <input formControlName="last"><br>
            <input type="button" value="submit" (click)="onSubmit();"><br>
            <input type="button" value="Add Entries" (click)="addentries();">
        </form>
    `
})
export class Chapter9 {
    myForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm(){
        this.myForm = this.fb.group({
            first: "Jim",
            last: ["Smith", Validators.required]
        })
    }    
    onSubmit(){
        console.log(this.myForm)
    }
    addentries(){
        this.myForm.patchValue({
            first: "Homer"
        })
    }
}