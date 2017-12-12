import { Component, OnInit } from "@angular/core";
import { PeopleService } from "./people.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "person",
    providers: [PeopleService],
    template: `
        <div class="block">
            <h3>Person Detail Page</h3>
            <div>
                First Name: {{person.fName}}<br>
                Last Name: {{person.lName}}<br>
                Email: {{person.email}}<br>
                <button (click)="goBack()">Back</button>
            </div>
        </div>
    `
})
export class PersonDetailComponent implements OnInit {
    constructor(private peopleService: PeopleService, private router: ActivatedRoute) {}

    person: Object = {};
    sub: any;

    ngOnInit() {
        this.sub = this.router.params.subscribe(params => {
            let index = this.router.snapshot.params["index"];
            this.person = this.peopleService.getPerson(index);
        });
    }

    goBack() {
        window.history.back();
    }
}