import { Component } from "@angular/core";
@Component({
    selector: "pageone",
    templateUrl: "pageone.html",
    styles: [`
        :host p {
            background-color: yellow;
            font-family: sans-serif;
        }
    `]
})
export class PageOne {}