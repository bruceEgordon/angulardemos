import { Component } from "@angular/core";

@Component({
    selector: "chapter5",
    template: `
        <h3>Input Output Example</h3>
        <textinput [label]="label" (valueChange)="onValueChange($event)"></textinput>
        <br>Value: {{textValue}}
    `
})
export class Chapter5 {
    label: string = "Text Input";
    textValue: string = "";
    onValueChange(event: string) {
        this.textValue = event;
    }
}