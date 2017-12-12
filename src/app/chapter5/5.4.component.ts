import { Component } from "@angular/core";

@Component({
    selector: "chapter5",
    template: `
        <h4>Text Input</h4>
        First Name: <input type="text" [(ngModel)]="first_name"><br>
        <div>{{first_name}}</div>
        <h4>Date Value</h4>
        Choose Vacation Start Date: <input type="date" [(ngModel)]="vacation"><br>
        Your Vacation starts: {{vacation}}
    `
})
export class Chapter5 {
    first_name: string = "starting text";
    vacation: Date;
}