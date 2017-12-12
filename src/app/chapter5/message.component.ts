import { Component } from "@angular/core";

@Component({
    selector: "messagecmp",
    inputs: ["message"],
    template: `
        <div>
            <h4>Message Component</h4>
            <p>{{message}}</p>
        </div>
    `,
    styles: [`
        div {
            display: inline-block;
            padding: 10px;
            background-color: lightgrey;
        }
        h4, p {
            margin: 0px;
            padding: 2px;
        }
    `]
})
export class MessageComponent {
    message: string = "initial message...";
}