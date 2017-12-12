import { Component } from "@angular/core";

@Component({
    selector: "chapter13",
    template: `
        <h3>Pipe Example</h3>
        <p>{{ name | uppercase }}</p>
    `
})
export class Chapter13 {
    name: string = "Steve";
}