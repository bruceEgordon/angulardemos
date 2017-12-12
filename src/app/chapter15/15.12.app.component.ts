import { Component } from "@angular/core";

@Component({
    selector: "chapter15",
    template: `
        <h3>RouterApp</h3>
        <nav>
            <a href="#" routerLink="/">home</a>&nbsp;
            <a href="#" [routerLink]="['/form']">form</a>&nbsp;
            <a href="#" [routerLink]="['/people']">people</a>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class Chapter15 {}