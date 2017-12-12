import { Component } from "@angular/core";

@Component({
    selector: "chapter14",
    template: `
        <div [ngSwitch]="index">
            <p *ngSwitchCase="1">Page-1</p>
            <p *ngSwitchCase="2">Page-2</p>
            <p *ngSwitchCase="3">Page-3</p>
        </div><br>
        <input type="button" (click)="next()" value="next">
    `
})
export class Chapter14 {
    index: number = 1;
    next() {
        this.index = (this.index < 3)? this.index + 1: 1;
    }
}