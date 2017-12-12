import { Component } from '@angular/core';

@Component({
    selector: "chapter8",
    templateUrl: "8.16.component.html",
    styleUrls: ["8.16.component.css"]
})
export class Chapter8 {
    person: Object = {name:"Cindy", email:"cindy@gmail.com"};
    onSubmit(form) {
        console.log("person: " + JSON.stringify(this.person, null, 2));
        console.log("form.value: " + JSON.stringify(form.value, null, 2));
    }
}