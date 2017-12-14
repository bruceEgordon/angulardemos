import { Component } from '@angular/core';
import { Registration } from './registration.class';

@Component({
    selector: "chapter8",
    templateUrl: "8.17.component.html",
    styleUrls: ["8.16.component.css"],
    providers: [Registration]
})
export class Chapter8 {
    //private tst: Test;
    constructor(private registration: Registration){
        this.registration.name = "Cindy";
        this.registration.email = "cindy@gmail.com";
    };
    
    onSubmit(form) {
        console.log("person: " + JSON.stringify(this.registration, null, 2));
        console.log("form.value: " + JSON.stringify(form.value, null, 2));
    }
}