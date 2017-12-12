import { Component } from "@angular/core";

@Component({
    selector: "chapter5",
    template: `
        <h4>Change Event</h4>
        Enter Text: <input id="txt1" type="text" (keydown)="toggle('txt1')" [(ngModel)]="first_name">
        <h4>Click Event</h4>
        Click Me: <button id="btn1" (click)="toggle('btn1')">Button</button>
        <h4>Mouse Over Event</h4>
        <div id="div1" (mouseover)="toggle('div1')" (mouseleave)="toggle('div1')">Mouse over me!</div>
    `,
    styles: [`
        #div1 {
            width: 200px;
            height: 50px;
            border: 1px black solid;
        }
    `]
})
export class Chapter5 {
    toggle(id) {
        let e = document.getElementById(id);
        let bc = e.style.backgroundColor;
        bc = (bc != "lightblue")? "lightblue":"yellow";
        e.style.backgroundColor = bc;
    }
    first_name: string;
}