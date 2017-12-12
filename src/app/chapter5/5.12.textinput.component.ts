import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
    selector: "textinput",
    template: `
        {{label}}<br>
        <input type="text" [(ngModel)]="text" name="text" (keyup)="onChange()">
    `
})
export class TextInputComponent {
    text: string = "";
    @Input() label: string;
    @Output() valueChange = new EventEmitter();
    onChange() { this.valueChange.emit(this.text);}
}