import { Component } from "@angular/core";
import { DatePipe } from "@angular/common";

@Component({
    selector: "chapter13",
    providers: [DatePipe],
    template: `
        <h3>Pipe in JavaScript</h3>
        <p><span class=bold>Data:</span>
        {{birthday}}</p>
        <p><span class="bold">Formatted:</span>
        {{birthdayFmt}}</p>
    `,
    styles: [`.bold {font-weight: bold}`]
})
export class Chapter13 {
    constructor(private datePipe: DatePipe) {}
    birthday: Date = new Date(1993, 10, 1);
    birthdayFmt: string = this.datePipe.transform(this.birthday, "M-dd-yyyy");
}