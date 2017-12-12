import { Component } from "@angular/core";
import { PeopleService } from "./12.9.people.service";

@Component({
    selector: "chapter12",
    template: `
        <h3>People List</h3>
        <ul>
            <li *ngFor="let x of list">
            {{x.fname}}, {{x.lname}}, {{x.email}}
            </li>
        </ul>
    `,
    providers: [ PeopleService ]
})
export class Chapter12 {
    list: Promise<Object[]>;
    constructor( srvPeople: PeopleService){
        srvPeople.people.subscribe(data => this.list = data.json(),
        error => console.error("Error: " + error));
    }
}