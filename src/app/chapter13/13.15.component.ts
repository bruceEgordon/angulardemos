import { Component } from "@angular/core";
import { CharacterLengthPipe } from "./character.length.pipe";

@Component({
    selector: "chapter13",
    providers: [ CharacterLengthPipe ],
    template: `
        <h3>Character Length Pipe: Example</h3>
        <input type="range" min="5" max="30" [(ngModel)]="lengthTerm"><br>
        <table>
            <tr><td class="bold">title</td><td>{{title}}</td></tr>
            <tr><td class="bold">title|charlength</td>
                <td>{{title | charlength: lengthTerm}}</td></tr>
            <tr><td class="bold">titleShort</td><td>{{titleShort()}}</td></tr>
        </table>
    `
})
export class Chapter13 {
    constructor(private charLength: CharacterLengthPipe) {}
    lengthTerm: number = 5;
    title: string = "The day the earth stood still";
    titleShort() {
        return this.charLength.transform(this.title, this.lengthTerm/2);
    }
}