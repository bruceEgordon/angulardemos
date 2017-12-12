import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "chapter15",
    template: `
        <h3>RouterApp</h3>
        <nav>
            <a href="#" routerLink="/">home</a>&nbsp;
            <a href="#" [routerLink]="['/form']">form</a>&nbsp;
            <a href="#" [routerLink]="['/people']" [queryParams]="{ show: 'table' }">people table</a>&nbsp;
            <a href="#" [routerLink]="['/people']" [queryParams]="{ show: 'list' }">people list</a>&nbsp;
        </nav>
        <router-outlet></router-outlet>
    `
})
export class Chapter15 {
    constructor(private router: Router) {}

    //not used but shows how to add params with code
    goToPeopleList() {
        this.router.navigate(['/people'], {queryParams: { show: 'list' }});
    }
}