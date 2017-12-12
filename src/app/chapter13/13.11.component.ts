import { Component } from "@angular/core";
import { CurrencyPipe } from "@angular/common";

@Component({
    selector: "chapter13",
    providers: [ CurrencyPipe ],
    template: `
        <h3>CurrencyPipe</h3>
        {{ 25 | currency: "USD": false: "1.0-2"}}<br>
        {{ 25 | currency: "CAD": true: "1.2-2"}}<br>
        {{ 25 | currency: "USD": true: "2.2-2"}}<br>
        {{ salary | currency: "CAD"}}<br>
        {{ price | currency: "EUR": true: "1.2-2"}}<br>
        {{ price | currency: "USD": true: "1.2-2"}}<br>
        {{ 65.243 | currency: "USD": true: "3.2-2"}}<br>
        {{ salaryFmt }}<br>
    `
})
export class Chapter13 {
    constructor(private currPipe: CurrencyPipe) {}
    price: number = 9.95;
    salary: number = 65000;
    salaryFmt = this.currPipe.transform(this.salary, "USD", true, "2.2-2");
}