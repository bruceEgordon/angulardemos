import { Component } from "@angular/core";
//import { NgStyle } from "@angular/common"; Not necessary with release version

@Component({
    selector: "chapter6",
    template: `
        <h3>ngStyle Example</h3>
        <span [ngStyle]= "{fontStyle: 'italic', fontFamily: 'sans-serif'}">Message</span><br>
        <span [ngStyle]="styles" (click)="toggleStyle()">Message_2</span><br>
        Click Message_2 to toggle styles.
    `,
    styles: ["h3{margin:5px;}"]
})
export class Chapter6 {
    styles1: Object = {border: "solid 1px black", color: "red"};
    styles2: Object = {border: "none", color: "black"};
    styles: Object = this.styles1;
    toggleStyle() {
        if(this.styles === this.styles1) {
            this.styles = this.styles2;
        } else {
            this.styles = this.styles1;
        }
    }
}