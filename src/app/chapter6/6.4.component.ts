import { Component } from "@angular/core";
//import { NgClass } from "@angular/common"; //not necessary with the release version

@Component({
    selector: "chapter6",
    template: `
        <h3>ngClass Example</h3>
        <span [ngClass]= "{bordered: isBordered}">
            Message Text
        </span><br>
        <input type="checkbox" [(ngModel)]="isBordered">
    `,
    styles: [`
        .bordered {
            border:solid 1px black;
        }
    `]
})
export class Chapter6 {
    isBordered: boolean = false;
}