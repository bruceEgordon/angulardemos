import { Component, OnInit } from "@angular/core";
import { PeopleService } from "./people.service";

@Component({
    selector: "people",
    providers: [PeopleService],
    template: `
        <h3>People List</h3>
        <ul>
            <li *ngFor="let x of list; let idx=index">
                <a href='#' [routerLink]="['/person', idx]">
                    {{x.fName}}, {{x.lName}}
                </a>
            </li>
        </ul>
    `
})
export class PeopleListComponent implements OnInit {
    list: object[];

    constructor(private peopleService: PeopleService) {}

    ngOnInit() {
        this.list = this.peopleService.getPeople();
    }
}