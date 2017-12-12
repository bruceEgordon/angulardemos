import { Component, Input } from "@angular/core";

@Component({
    selector: "messagecmp",
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
    @Input() message: string = "initial message...";
}