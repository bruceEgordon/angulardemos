import { Component } from "@angular/core";
import { PeopleService } from "./12.14.people.service";

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
    list: Object[];
    constructor( srvPeople: PeopleService){
        srvPeople.people.subscribe(people => this.list = people,
        error => console.error("Error: " + error));
    }
}