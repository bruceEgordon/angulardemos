import { Component, OnInit } from "@angular/core";
import { PeopleService } from "./people.service";
import { Router } from "@angular/router"

@Component({
    selector: "people",
    providers: [PeopleService],
    template: `
        <h3>People {{getTitle()}}</h3>
        <ul *ngIf="show==='list'">
            <li *ngFor="let x of list; let idx=index">
                <a href='#' [routerLink]="['/person', idx]">
                    {{x.fName}}, {{x.lName}}
                </a>
            </li>
        </ul>
        <table *ngIf="show==='table'">
            <tr *ngFor="let x of list; let idx=index" (click)="goToPersonView(idx)">
                <td>{{x.fName}}</td><td>{{x.lName}}</td>
            </tr>
        </table>
    `
})
export class PeopleListComponent implements OnInit {
    list: object[];
    show: string = "list";
    getTitle(): string { return this.show.toUpperCase(); }

    constructor(private peopleService: PeopleService,
        private router: Router) {}

    ngOnInit() {
        this.list = this.peopleService.getPeople();

        this.router.routerState.root.queryParams.subscribe(params => {
            let showtemp = params['show'];
            if(showtemp){ this.show = showtemp; }
        });
    }

    goToPersonView(index) { this.router.navigate(['/person', index]); }
}