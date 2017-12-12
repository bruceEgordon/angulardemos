import { Component } from "@angular/core";

@Component({
    selector: "chapter13",
    template: `
        <h3>Pipe in HTML</h3>
        <p><span class=bold>Data:</span>
        {{birthday}}</p>
        <p><span class="bold">Formatted:</span>
        {{birthday|date:"M-dd-yyyy"}}</p>
    `,
    styles: [`.bold {font-weight: bold}`]
})
export class Chapter13 {
    birthday: Date = new Date(1993, 10, 1);
}