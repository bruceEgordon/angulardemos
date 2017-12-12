import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "chapter15",
    template: `
        <h3>RouterApp</h3>
        <nav>
            <a href="#" routerLink="/">home</a>&nbsp;
            <a href="#" [routerLink]="['/form']">form</a>&nbsp;
            <button (click)="goToPeopleList()">people</button>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class Chapter15 {
    constructor(private router: Router) {}

    goToPeopleList() {
        let link = ['/people'];
        this.router.navigate(link);
    }
}