import { Component } from "@angular/core";

@Component({
    selector: "chapter14",
    template: `
        <div [ngSwitch]="index" class="block">
            <pageone *ngSwitchCase="1"></pageone>
            <pagetwo *ngSwitchCase="2"></pagetwo>
            <pagethree *ngSwitchCase="3"></pagethree>
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