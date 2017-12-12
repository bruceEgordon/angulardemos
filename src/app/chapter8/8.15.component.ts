import { Component } from '@angular/core';

@Component({
    selector: "chapter8",
    template: `
        <form #f="ngForm" novalidate (ngSubmit)="onSubmit(f)">
            <input name="xname" [(ngModel)]="person.name" required value="blah" ><br>
            <input name="xpass" [(ngModel)]="person.pass" required ><br>
            <input type="submit" value="submit" [disabled]="!f.valid || f.submitted"><br>
        </form>
    `
})
export class Chapter8 {
    person: Object = {name:"cindy", pass:"sass"};

    onSubmit(form) {
        console.log("person: " + JSON.stringify(this.person, null, 2));
        console.log("form.value: " + JSON.stringify(form.value, null, 2));
    }
}