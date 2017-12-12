import { Component } from "@angular/core";
import { DecimalPipe } from "@angular/common";

@Component({
    selector: "chapter13",
    providers: [ DecimalPipe ],
    template: `
        <h3>DecimalPipe</h3>
        {{ 25 | number: "1.0-2"}}<br>
        {{ 25 | number: "1.2-4"}}<br>
        {{ 25 | number: "2.2-4"}}<br>
        {{ 3.14 | number: "1.2-4"}}<br>
        {{ 3.14 | number: "1.4-4"}}<br>
        {{ 3.141592 | number: "1.2-4"}}<br>
        {{ 65.243 | number: "3.2-4"}}<br>
        {{ piFmt }}<br>
    `
})
export class Chapter13 {
    constructor(private decimalPipe: DecimalPipe) {}
    pi: number = 3.141592;
    piFmt = this.decimalPipe.transform(this.pi, "2.2-2");
}